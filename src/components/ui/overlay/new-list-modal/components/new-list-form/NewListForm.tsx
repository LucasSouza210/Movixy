import { useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import type { IconType } from "react-icons"
import FormField from "../../../../form/auth/form-field/FormField"
import FormSubmit from "../../../../form/auth/FormSubmit"
import { listTypes } from "../../../../../../utils/constants"

type Option = {
    value: string
    label: string
    icon: IconType
}

type NewListFormData = {
    title: string
    description: string
    type: string
    options?: Option[]
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

    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors }, reset } = useForm<NewListFormData>({
        mode: "onSubmit",
        reValidateMode: "onChange",
    })

    const onSubmit: SubmitHandler<NewListFormData> = async (data) => {
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center gap-5 sm:gap-6 md:gap-7 lg:gap-4 xl:gap-5 2xl:gap-6">
            <div className="w-full flex flex-col gap-5 sm:gap-5.5 md:gap-6 lg:gap-4 xl:gap-4.5 2xl:gap-5">
                {
                    fields.map((field) => (
                        <FormField key={field.name} title={field.title} placeholder={field.placeholder} error={errors[field.name]}{...register(field.name, field.rules)} options={field.options} />
                    ))
                }
            </div>
            <FormSubmit label={loading ? "createSubmitLoading" : "createSubmit"} disabled={loading} />
        </form>
    )
}