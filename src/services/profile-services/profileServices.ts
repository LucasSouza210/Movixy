import { supabase } from "../api/supabase"
import type { Profile } from "../../types/profile"

const bucket = "profile-images"
const profileColumns = "id, username, full_name, user_bio, avatar_url, banner_url, created_at"

export const profileImageMaxBytes = 2 * 1024 * 1024
export const profileImageTypes = ["image/jpeg", "image/png", "image/webp"]

const imageExtensions: Record<string, string> = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
}

export type ImageKind = "avatar" | "banner"
export type ImageChange = File | null | undefined

type ProfilePatch = Pick<Profile, "full_name" | "user_bio" | "avatar_url" | "banner_url">

type SaveProfileParams = {
    userId: string
    current: Profile
    full_name: string
    user_bio: string | null
    avatar: ImageChange
    banner: ImageChange
}

async function uploadProfileImage(userId: string, kind: ImageKind, file: File) {
    const extension = imageExtensions[file.type]

    if (!extension) throw new Error("Unsupported profile image type")

    const path = `${userId}/${kind}-${crypto.randomUUID()}.${extension}`

    const { error } = await supabase.storage
        .from(bucket)
        .upload(path, file, { contentType: file.type, cacheControl: "31536000" })

    if (error) throw error

    const { data } = supabase.storage.from(bucket).getPublicUrl(path)

    return { path, url: data.publicUrl }
}

function pathFromUrl(url: string) {
    const marker = `/${bucket}/`
    const index = url.indexOf(marker)

    if (index === -1) return null

    try {
        return decodeURIComponent(url.slice(index + marker.length).split("?")[0])
    } catch {
        return null
    }
}

async function removeFiles(paths: string[]) {
    if (!paths.length) return

    const { error } = await supabase.storage.from(bucket).remove(paths)

    if (error) console.error("Failed to remove profile images:", error)
}

async function updateProfile(userId: string, patch: ProfilePatch): Promise<Profile> {
    const { data, error } = await supabase
        .from("profiles")
        .update(patch)
        .eq("id", userId)
        .select(profileColumns)
        .single()

    if (error) throw error

    return data as Profile
}

export async function saveProfile({ userId, current, full_name, user_bio, avatar, banner, }: SaveProfileParams): Promise<Profile> {
    const uploaded: string[] = []
    const replaced: string[] = []

    async function resolveImage(kind: ImageKind, change: ImageChange, currentUrl: string | null) {
        if (change === undefined) return currentUrl

        if (currentUrl) {
            const oldPath = pathFromUrl(currentUrl)
            if (oldPath) replaced.push(oldPath)
        }

        if (change === null) return null

        const { path, url } = await uploadProfileImage(userId, kind, change)
        uploaded.push(path)

        return url
    }

    try {
        const avatar_url = await resolveImage("avatar", avatar, current.avatar_url)
        const banner_url = await resolveImage("banner", banner, current.banner_url)

        const profile = await updateProfile(userId, {
            full_name,
            user_bio,
            avatar_url,
            banner_url,
        })

        await removeFiles(replaced)

        return profile
    } catch (error) {
        await removeFiles(uploaded)
        throw error
    }
}