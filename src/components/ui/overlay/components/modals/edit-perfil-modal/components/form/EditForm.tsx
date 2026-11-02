import { useState } from "react"
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { useAuth } from "../../../../../../../../hooks/auth/useAuth"
import { saveProfile, type ImageChange } from "../../../../../../../../services/profile-services/profileServices"
import { editProfileFields } from "../../../../../../../../utils/constants"
import type { EditProfileFormData, Profile } from "../../../../../../../../types/profile"
import useOverlay from "../../../../../../../../hooks/ui/useOverlay"
import FieldsContainer from "../../../../../../form/FieldsContainer"
import EditImages from "./components/edit-images/EditImages"
import FormField from "../../../../../../form/form-field/FormField"
import FormSubmit from "../../../../../../form/FormSubmit"

type EditProfileProps = {
    profile: Profile
    onSaved: (profile: Profile) => void
}

export default function EditForm({ profile, onSaved }: EditProfileProps) {

    const { user } = useAuth()
    const { closeOverlay } = useOverlay()

    const [avatar, setAvatar] = useState<ImageChange>(undefined)
    const [banner, setBanner] = useState<ImageChange>(undefined)
    const [loading, setLoading] = useState(false)

    const labels = { idle: "saveSubmit", busy: "saveSubmitLoading" } as const

    const { register, handleSubmit, watch, formState: { errors } } = useForm<EditProfileFormData>({
        mode: "onSubmit",
        reValidateMode: "onChange",
        defaultValues: {
            full_name: profile.full_name ?? "",
            user_bio: profile.user_bio ?? "",
        },
    })

    const onSubmit: SubmitHandler<EditProfileFormData> = async (data) => {
        if (!user || loading) return

        const full_name = data.full_name.trim()
        const user_bio = data.user_bio?.trim() || null

        const unchanged =
            full_name === (profile.full_name ?? "") &&
            user_bio === (profile.user_bio ?? null) &&
            avatar === undefined &&
            banner === undefined

        if (unchanged) {
            closeOverlay()
            return
        }

        setLoading(true)

        try {
            const updated = await saveProfile({
                userId: user.id,
                current: profile,
                full_name,
                user_bio,
                avatar,
                banner,
            })

            onSaved(updated)
            closeOverlay()
        } catch (error) {
            console.error("Failed to save profile:", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center gap-5 sm:gap-6 md:gap-7 lg:gap-4 xl:gap-5 2xl:gap-6">
            <FieldsContainer>
                <EditImages name={watch("full_name")} avatarUrl={profile.avatar_url} bannerUrl={profile.banner_url} avatar={avatar} banner={banner} onAvatarChange={setAvatar} onBannerChange={setBanner} />
                {
                    editProfileFields.map((field) => (
                        <FormField key={field.name} title={field.title} placeholder={field.placeholder} maxLength={field.maxLength} textarea={field.textarea} error={errors[field.name]} {...register(field.name, field.rules)} />
                    ))
                }
            </FieldsContainer>
            <FormSubmit label={loading ? labels.busy : labels.idle} disabled={loading} />
        </form>
    )
}