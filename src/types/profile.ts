import type { RegisterOptions } from "react-hook-form"

export type Profile = {
    id: string
    username: string
    full_name: string | null
    user_bio: string | null
    avatar_url: string | null
    banner_url: string | null
    created_at: string
}

export type EditProfileFormData = {
    full_name: string
    user_bio: string
}

export type EditProfileField = {
    name: keyof EditProfileFormData
    title: string
    placeholder: string
    maxLength: number
    textarea?: boolean
    rules?: RegisterOptions<EditProfileFormData>
}