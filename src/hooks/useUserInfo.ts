import { useEffect, useState } from "react"
import { useAuth } from "./useAuth"
import { supabase } from "../services/api/supabase"

type Profile = {
    id: string
    created_at: string
    username: string | null
    full_name: string | null
    user_bio: string | null
    avatar_url: string | null
}

export function useUserInfo() {
    const { user } = useAuth()

    const [profile, setProfile] = useState<Profile | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!user?.id) {
            setProfile(null)
            setLoading(false)
            return
        }

        let active = true
        setLoading(true)
        setError(null)

        supabase
            .from("profiles")
            .select("id, created_at, username, full_name, user_bio, avatar_url")
            .eq("id", user.id)
            .single()
            .then(({ data, error }) => {
                if (!active) return

                if (error) {
                    setError(error.message)
                    setProfile(null)
                } else {
                    setProfile(data)
                }

                setLoading(false)
            })

        return () => {
            active = false
        }
    }, [user?.id])

    const name = profile?.full_name || profile?.username || user?.email?.split("@")[0] || "Usuário"
    const username = profile?.username ?? null
    const bio = profile?.user_bio ?? null
    const avatarUrl = profile?.avatar_url ?? null
    const createdAt = profile?.created_at ? new Date(profile.created_at) : null

    return { name, username, bio, avatarUrl, email: user?.email ?? null, createdAt, loading, error }
}