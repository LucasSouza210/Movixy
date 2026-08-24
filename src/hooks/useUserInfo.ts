import { useAuth } from "./useAuth"
import type { UserMetadata } from "../types/auth"

export function useUserInfo() {
    const { user } = useAuth()

    const metadata = (user?.user_metadata ?? {}) as UserMetadata

    const name = metadata.full_name || metadata.name || user?.email?.split("@")[0] || "Usuário"
    const avatarUrl = metadata.avatar_url || metadata.picture || null
    const createdAt = user?.created_at ? new Date(user.created_at) : null

    return { name, avatarUrl, email: user?.email ?? null, createdAt }
}