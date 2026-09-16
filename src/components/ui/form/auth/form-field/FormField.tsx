import type { InputHTMLAttributes, Ref } from "react"
import type { FieldError } from "react-hook-form"
import FormFieldTitle from "./components/FormFieldTitle"
import type { IconType } from "react-icons"
import FormInput from "./components/form-input/FormInput"
import FormFieldError from "./components/FormFieldError"

export type SelectOption = {
    value: string
    label: string
    icon: IconType
}

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string
    password?: boolean
    error?: FieldError
    ref?: Ref<HTMLInputElement> | undefined
    options?: SelectOption[]
}

export default function FormField({ title, password, error, ref, options, ...inputProps }: FormFieldProps) {
    return (
        <div className="w-full flex flex-col gap-2.5 sm:gap-2.75 md:gap-3 lg:gap-2 xl:gap-2.25 2xl:gap-2.5">
            <FormFieldTitle title={title} />
            <FormInput ref={ref} password={password} options={options} {...inputProps} error={error} />
            {
                error &&
                <FormFieldError error={error} />
            }
        </div>
    )
}