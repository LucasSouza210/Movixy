import { useForm, type SubmitHandler } from "react-hook-form"
import { useAuth } from "../../../../../hooks/useAuth"
import FormField from "../../../../../components/ui/form/form-field/FormField"
import FormSubmit from "../../../../../components/ui/form/FormSubmit"

type LoginFormData = {
    email: string
    password: string
}

const fields = [
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

export default function LoginForm() {

    const { login, loading, serverError } = useAuth()

    const { register, handleSubmit, setError, formState: { errors }, reset } = useForm<LoginFormData>({
        mode: "onSubmit",
        reValidateMode: "onChange",
    })

    const onLoginSubmit: SubmitHandler<LoginFormData> = async (data) => {
        const email = data.email.trim().toLowerCase()

        const success = await login(email, data.password, (field, message) => {
            if (field === "email" || field === "password") {
                setError(field, { type: "manual", message })
            }
        })

        if (success) {
            reset()
        }
    }

    return (
        <form onSubmit={handleSubmit(onLoginSubmit)} className="w-full flex flex-col items-center gap-5 sm:gap-6 md:gap-7 lg:gap-4 xl:gap-5 2xl:gap-6">
            <div className="w-full flex flex-col gap-5 sm:gap-5.5 md:gap-6 lg:gap-4 xl:gap-4.5 2xl:gap-5">
                {
                    fields.map((field) => (
                        <FormField
                            key={field.name}
                            title={field.title}
                            placeholder={field.placeholder}
                            password={field.password}
                            error={errors[field.name]}
                            {...register(field.name, field.rules)}
                        />
                    ))
                }
            </div>
            <FormSubmit label={loading ? "loginSubmitLoading" : "loginSubmit"} disabled={loading} />
        </form>
    )
}