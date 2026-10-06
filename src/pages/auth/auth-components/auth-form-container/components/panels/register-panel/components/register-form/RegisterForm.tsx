import { useForm, type SubmitHandler } from "react-hook-form"
import { useAuth } from "../../../../../../../../../hooks/useAuth"
import FormField from "../../../../../../../../../components/ui/form/form-field/FormField"
import RegisterTerms from "./components/register-terms/RegisterTerms"
import FormSubmit from "../../../../../../../../../components/ui/form/FormSubmit"

type RegisterFormData = {
    name: string
    email: string
    password: string
    terms: boolean
}

const fields = [
    {
        name: "name" as const,
        title: "nameLabel",
        placeholder: "namePlaceholder",
        rules: {
            required: "nameRequiredError",
            minLength: { value: 2, message: "nameMinLengthError" },
            maxLength: { value: 32, message: "nameMaxLengthError" },
        },
    },
    {
        name: "email" as const,
        title: "emailLabel",
        placeholder: "emailPlaceholder",
        rules: {
            required: "emailRequiredError",
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "emailInvalidError",
            },
        },
    },
    {
        name: "password" as const,
        title: "passwordLabel",
        placeholder: "passwordPlaceholder",
        password: true,
        rules: {
            required: "passwordRequiredError",
            minLength: { value: 8, message: "passwordMinLengthError" },
            maxLength: { value: 60, message: "passwordMaxLengthError" },
        },
    },
]

export default function RegisterForm() {

    const { register: registerUser, loading, serverError } = useAuth()

    const { register, handleSubmit, watch, setValue, setError, clearErrors, formState: { errors }, reset } = useForm<RegisterFormData>({
        defaultValues: { terms: false },
        mode: "onSubmit",
        reValidateMode: "onChange",
    })

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

    return (
        <form onSubmit={handleSubmit(onRegisterSubmit)} className="w-full flex flex-col items-center gap-5 sm:gap-6 md:gap-7 lg:gap-4 xl:gap-5 2xl:gap-6">
            <div className="w-full flex flex-col gap-5 sm:gap-5.5 md:gap-6 lg:gap-4 xl:gap-4.5 2xl:gap-5">
                {
                    fields.map((field) => (
                        <FormField key={field.name} title={field.title} placeholder={field.placeholder} password={field.password} error={errors[field.name]} {...register(field.name, field.rules)} />
                    ))
                }
            </div>
            <RegisterTerms checked={watch("terms")} error={errors.terms} registration={register("terms", { validate: (value) => value === true || "Você precisa aceitar os termos", })} onToggle={handleToggle} />
            <FormSubmit label={loading ? "registerSubmitLoading" : "registerSubmit"} disabled={loading} />
        </form>
    )
}