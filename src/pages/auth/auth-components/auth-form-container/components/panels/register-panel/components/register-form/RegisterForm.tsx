import { useEffect, useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { useAuth } from "../../../../../../../../../hooks/auth/useAuth"
import { registerFields } from "../../../../../../../../../utils/constants"
import { clearAuthDraft, getAuthDraft, saveAuthDraft } from "../../../../../../../../../utils/auth/authDraft"
import FieldsContainer from "../../../../../../../../../components/ui/form/FieldsContainer"
import FormField from "../../../../../../../../../components/ui/form/form-field/FormField"
import RegisterTerms from "./components/register-terms/RegisterTerms"
import FormSubmit from "../../../../../../../../../components/ui/form/FormSubmit"

type RegisterFormData = {
    name: string
    email: string
    password: string
    terms: boolean
}

export default function RegisterForm() {

    const { register: registerUser, loading, serverError } = useAuth()

    const [draft] = useState(() => getAuthDraft())

    const { register, handleSubmit, watch, getValues, setValue, setError, clearErrors, formState: { errors }, reset } = useForm<RegisterFormData>({
        defaultValues: {
            name: draft?.name ?? "",
            email: draft?.email ?? "",
            password: draft?.password ?? "",
            terms: draft?.terms ?? false,
        },
        mode: "onSubmit",
        reValidateMode: "onChange",
    })

    useEffect(() => {
        clearAuthDraft()
    }, [])

    const onRegisterSubmit: SubmitHandler<RegisterFormData> = async (data) => {
        if (!data.terms) return

        const email = data.email.trim().toLowerCase(),
            name = data.name.trim()

        const success = await registerUser(email, data.password, name, (field, message) => {
            setError(field, { type: "manual", message })
        })

        if (success) {
            reset()
        }
    }

    const handleToggle = () => {
        setValue("terms", !watch("terms"), { shouldValidate: true })
        clearErrors("terms")
    }

    const handleOpenTerms = () => {
        saveAuthDraft({
            name: getValues("name"),
            email: getValues("email"),
            password: getValues("password"),
            terms: getValues("terms"),
        })
    }

    return (
        <form onSubmit={handleSubmit(onRegisterSubmit)} className="w-full flex flex-col items-center gap-5 sm:gap-6 md:gap-7 lg:gap-4 xl:gap-5 2xl:gap-6">
            <FieldsContainer>
                {
                    registerFields.map((field) => (
                        <FormField key={field.name} title={field.title} placeholder={field.placeholder} password={field.password} error={errors[field.name]} {...register(field.name, field.rules)} />
                    ))
                }
                <RegisterTerms checked={watch("terms")} error={errors.terms} registration={register("terms", { validate: (value) => value === true || "Você precisa aceitar os termos", })} onToggle={handleToggle} onOpenTerms={handleOpenTerms} />
            </FieldsContainer>
            <FormSubmit label={loading ? "registerSubmitLoading" : "registerSubmit"} disabled={loading} />
        </form>
    )
}