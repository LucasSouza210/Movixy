import { useEffect, useRef, useState } from "react"
import { useAuth } from "../auth/useAuth"
import { supabase } from "../../services/api/supabase"
import { useTranslate } from "../../translations/Translations"
import { onProfileUpdated } from "../../utils/profileEvents"
import type { Profile } from "../../types/profile"

const profileCache = new Map<string, Profile>()

onProfileUpdated(() => profileCache.clear())

export function useUserInfo() {
    const { user } = useAuth()

    const { line } = useTranslate()

    const cachedProfile = user?.id ? profileCache.get(user.id) ?? null : null

    const [profile, setProfile] = useState<Profile | null>(cachedProfile)
    const [loading, setLoading] = useState(!cachedProfile)
    const [error, setError] = useState<string | null>(null)
    const [refreshKey, setRefreshKey] = useState(0)

    const loadedFor = useRef<string | null>(cachedProfile && user?.id ? user.id : null)

    useEffect(() => {
        return onProfileUpdated(() => setRefreshKey(k => k + 1))
    }, [])

    useEffect(() => {
        if (!user?.id) {
            profileCache.clear()
            loadedFor.current = null
            setProfile(null)
            setLoading(false)
            return
        }

        const cached = profileCache.get(user.id)

        if (cached) {
            setProfile(cached)
            setError(null)
            setLoading(false)
            loadedFor.current = user.id
            return
        }

        const silent = loadedFor.current === user.id

        let active = true

        if (!silent) {
            setLoading(true)
            setError(null)
        }

        supabase.from("profiles").select("id, created_at, username, full_name, user_bio, avatar_url, banner_url").eq("id", user.id).single().then(({ data, error }) => {
            if (!active) return

            if (error) {
                if (!silent) {
                    setError(error.message)
                    setProfile(null)
                }
            } else {
                profileCache.set(user.id, data)
                setProfile(data)
                loadedFor.current = user.id
            }

            setLoading(false)
        })

        return () => {
            active = false
        }
    }, [user?.id, refreshKey])

    const name = profile?.full_name || profile?.username || user?.email?.split("@")[0] || line('user')
    const username = profile?.username ?? null
    const bio = profile?.user_bio ?? null
    const avatarUrl = profile?.avatar_url ?? null
    const createdAt = profile?.created_at ? new Date(profile.created_at) : null

    return { profile, name, username, bio, avatarUrl, email: user?.email ?? null, createdAt, loading, error }
}