import { useContext, useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { createList, updateList } from "../../../../../../../../services/lists-services/listsServices"
import { Contexts } from "../../../../../../../../contexts/ContextsProvider"
import { newListFields } from "../../../../../../../../utils/constants"
import type { UserList } from "../../../../../../../../types/tmdb"
import useOverlay from "../../../../../../../../hooks/useOverlay"
import FieldsContainer from "../../../../../../form/FiledsContainer"
import FormField from "../../../../../../form/form-field/FormField"
import FormSubmit from "../../../../../../form/FormSubmit"


type NewListFormData = {
    title: string
    description: string
}

export default function NewListForm({ list }: { list?: UserList }) {

    const { addUserList, updateUserList } = useContext(Contexts)!

    const { closeOverlay } = useOverlay()

    const [loading, setLoading] = useState(false)

    const isEdit = !!list

    const labels = isEdit ? { idle: "saveSubmit", busy: "saveSubmitLoading" } as const : { idle: "createSubmit", busy: "createSubmitLoading" } as const

    const { register, handleSubmit, formState: { errors }, reset } = useForm<NewListFormData>({
        mode: "onSubmit",
        reValidateMode: "onChange",
        defaultValues: {
            title: list?.title ?? "",
            description: list?.description ?? "",
        },
    })

    const onSubmit: SubmitHandler<NewListFormData> = async (data) => {

        const title = data.title.trim()
        const description = data.description?.trim() || null

        if (list && title === list.title && description === (list.description ?? null)) {
            closeOverlay()
            return
        }

        setLoading(true)

        try {
            if (list) {
                const updated = await updateList(list.id, { title, description })
                updateUserList(updated)
            } else {
                const created = await createList(title, description ?? undefined)
                addUserList(created)
                reset()
            }

            closeOverlay()
        } catch (error) {
            console.error(`Failed to ${isEdit ? "update" : "create"} list:`, error)
        } finally {
            setLoading(false)
        }
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center gap-5 sm:gap-6 md:gap-7 lg:gap-4 xl:gap-5 2xl:gap-6">
            <FieldsContainer>
                {
                    newListFields.map((field) => (
                        <FormField title={field.title} placeholder={field.placeholder} maxLength={field.maxLength} textarea={field.textarea} error={errors[field.name]} {...register(field.name, field.rules)} key={field.name} />
                    ))
                }
            </FieldsContainer>
            <FormSubmit label={loading ? labels.busy : labels.idle} disabled={loading} />
        </form>
    )
}