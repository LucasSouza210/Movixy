import { useContext, useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { createList } from "../../../../../../../../services/lists-services/listsServices"
import { Contexts } from "../../../../../../../../contexts/ContextsProvider"
import { newListFields } from "../../../../../../../../utils/constants"
import useOverlay from "../../../../../../../../hooks/useOverlay"
import FormField from "../../../../../../form/form-field/FormField"
import FormSubmit from "../../../../../../form/FormSubmit"


type NewListFormData = {
    title: string
    description: string
}

export default function NewListForm() {

    const contexts = useContext(Contexts)

    const { addUserList } = contexts!

    const { closeOverlay } = useOverlay()

    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors }, reset } = useForm<NewListFormData>({
        mode: "onSubmit",
        reValidateMode: "onChange",
    })

    const onSubmit: SubmitHandler<NewListFormData> = async (data) => {

        setLoading(true)

        try {
            const newList = await createList(data.title.trim(), data.description?.trim() || undefined)
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
            <div className="w-full flex flex-col gap-4 sm:gap-4.5 md:gap-5 lg:gap-3 xl:gap-3.5 2xl:gap-4">
                {
                    newListFields.map((field) => (
                        <FormField title={field.title} placeholder={field.placeholder} maxLength={field.maxLength} textarea={field.textarea} error={errors[field.name]} {...register(field.name, field.rules)} key={field.name} />
                    ))
                }
            </div>
            <FormSubmit label={loading ? "createSubmitLoading" : "createSubmit"} disabled={loading} />
        </form>
    )
}