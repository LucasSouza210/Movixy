import { useContext, useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import FormField from "../../../../form/form-field/FormField"
import FormSubmit from "../../../../form/FormSubmit"
import { createList } from "../../../../../../services/lists-services/listsServices"
import { listTypes } from "../../../../../../utils/constants"
import useOverlay from "../../../../../../hooks/useOverlay"
import type { ListType } from "../../../../../../types/tmdb"
import { Contexts } from "../../../../../../contexts/ContextsProvider"

type NewListFormData = {
    title: string
    description: string
    type: string
}

const fields = [
    {
        name: "title" as const,
        title: "listTitleLabel",
        placeholder: "listTitlePlaceholder",
        rules: {
            required: "listTitleRequiredError",
            minLength: { value: 2, message: "listTitleMinLengthError" },
            maxLength: { value: 50, message: "listTitleMaxLengthError" },
        },
    },
    {
        name: "description" as const,
        title: "listDescriptionLabel",
        placeholder: "listDescriptionPlaceholder",
        rules: {
            maxLength: { value: 200, message: "listDescriptionMaxLengthError" },
        },
    },
    {
        name: "type" as const,
        title: "listTypeLabel",
        placeholder: '',
        rules: {
            required: "listTypeRequiredError",
        },
        options: listTypes
    },
]

export default function NewListForm() {

    const contexts = useContext(Contexts)

    const { addUserList } = contexts!

    const { closeOverlay } = useOverlay()

    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors }, reset } = useForm<NewListFormData>({
        defaultValues: { type: "media" },
        mode: "onSubmit",
        reValidateMode: "onChange",
    })

    const onSubmit: SubmitHandler<NewListFormData> = async (data) => {

        setLoading(true)

        try {
            const newList = await createList(data.title.trim(), data.type as ListType, data.description?.trim() || undefined)
            addUserList(newList)
            reset()
            closeOverlay()
        } catch (error) {
            console.error("Failed to create list:", error)
        } finally {
            setLoading(false)
        }

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center gap-5 sm:gap-6 md:gap-7 lg:gap-4 xl:gap-5 2xl:gap-6">
            <div className="w-full flex flex-col gap-5 sm:gap-5.5 md:gap-6 lg:gap-4 xl:gap-4.5 2xl:gap-5">
                {
                    fields.map((field) => (
                        <FormField key={field.name} title={field.title} placeholder={field.placeholder} error={errors[field.name]} options={field.options} {...register(field.name, field.rules)} />
                    ))
                }
            </div>
            <FormSubmit label={loading ? "createSubmitLoading" : "createSubmit"} disabled={loading} />
        </form>
    )
}