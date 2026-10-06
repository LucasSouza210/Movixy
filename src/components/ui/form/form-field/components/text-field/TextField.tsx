import { useEffect, useState } from "react"
import type { InputHTMLAttributes, Ref, TextareaHTMLAttributes } from "react"
import type { FieldError } from "react-hook-form"
import ShowPassword from "./components/ShowPassword"
import FormTextarea from "./components/options/FormTextarea"
import FormInput from "./components/options/FormInput"

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string
    textarea: boolean | undefined
    password?: boolean
    ref?: Ref<HTMLInputElement | HTMLTextAreaElement>
    error: FieldError | undefined
}

export default function TextField({ title, textarea, password, ref, error, ...inputProps }: FormInputProps) {

    const [show, setShow] = useState<boolean | null>(null)

    useEffect(() => {
        typeof password == "boolean" && setShow(password)
    }, [password])

    return (
        <div className={`w-full flex border rounded-[10px] sm:rounded-[11px] md:rounded-xl lg:rounded-lg xl:rounded-[9px] 2xl:rounded-[10px] bg-elevated ${textarea ? 'h-30 sm:h-33 md:h-36 lg:h-24 xl:h-27 2xl:h-30' : 'h-10 sm:h-11 md:h-12 lg:h-8 xl:h-9 2xl:h-10'} ${error ? 'border-red-400/50 dark:border-red-500/50' : `border-action focus-within:border-zinc-400 dark:focus-within:border-zinc-700`}`}>
            {
                textarea ?
                    <FormTextarea ref={ref as Ref<HTMLTextAreaElement>} maxLength={inputProps.maxLength} inputProps={inputProps as TextareaHTMLAttributes<HTMLTextAreaElement>} />
                    :
                    <FormInput ref={ref as Ref<HTMLInputElement>} maxLength={inputProps.maxLength} password={password} show={show} inputProps={inputProps} />
            }
            {
                password &&
                <ShowPassword show={show} toggle={setShow} />
            }
        </div>
    )
}