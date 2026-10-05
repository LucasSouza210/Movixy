import type { InputHTMLAttributes, Ref } from "react"
import type { FieldError } from "react-hook-form"
import FormFieldTitle from "./components/FormFieldTitle"
import TextField from "./components/text-field/TextField"
import FormFieldError from "./components/FormFieldError"

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
            <FormFieldTitle title={title} />
            <TextField ref={ref} name={name} title={title} textarea={textarea} password={password} {...inputProps} error={error} />
            {
                error &&
                <FormFieldError error={error} />
            }
        </div>
    )
}