import type { UserMetadata } from "../../types/auth"
import { supabase } from "../api/supabase"

export async function registerUser(email: string, password: string, name: string) {
    const { data, error } = await supabase.auth.signUp({
        email, password,
        options: {
            data: {
                name,
            },
        },
    })
    if (error) throw error
    return data
}

export async function loginUser(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    return data
}

export async function loginWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: window.location.origin,
        },
    })
    if (error) throw error
    return data
}

export async function loginWithFacebook() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "facebook",
        options: {
            redirectTo: window.location.origin,
        },
    })
    if (error) throw error
    return data
}

export async function logoutUser() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
}

export async function getCurrentUser() {
    const { data, error } = await supabase.auth.getUser()
    if (error) throw error
    return data.user
}

export async function getUserProfile() {
    const user = await getCurrentUser()
    if (!user) return null

    const metadata = (user.user_metadata ?? {}) as UserMetadata

    return {
        name: metadata.full_name || metadata.name || user.email?.split("@")[0] || "Usuário",
        email: user.email ?? null,
        avatarUrl: metadata.avatar_url || metadata.picture || null,
        createdAt: user.created_at ? new Date(user.created_at) : null,
    }
}