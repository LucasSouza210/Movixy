import type { InputHTMLAttributes, Ref } from "react"
import type { FieldError } from "react-hook-form"
import Title from "./components/Title"
import TextField from "./components/text-field/TextField"
import Error from "./components/Error"

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string
    password?: boolean
    textarea?: boolean
    error?: FieldError
    ref?: Ref<HTMLInputElement> | undefined
}

export default function FormField({ name, title, password, textarea, error, ref, ...inputProps }: FormFieldProps) {
    return (
        <div className="w-full flex flex-col gap-2.5 sm:gap-2.75 md:gap-3 lg:gap-2 xl:gap-2.25 2xl:gap-2.5">
            <Title title={title} />
            <TextField ref={ref} name={name} title={title} textarea={textarea} password={password} {...inputProps} error={error} />
            {
                error &&
                <Error error={error} />
            }
        </div>
    )
}