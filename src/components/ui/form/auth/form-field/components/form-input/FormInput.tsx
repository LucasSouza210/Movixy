import { useEffect, useState } from "react"
import type { InputHTMLAttributes, Ref } from "react"
import type { FieldError } from "react-hook-form"
import { useTranslate } from "../../../../../../../translations/Translations"
import type { SelectOption } from "../../FormField"
import ShowPassword from "./components/ShowPassword"
import Select from "./components/select/Select"

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    password?: boolean
    ref?: Ref<HTMLInputElement> | undefined
    error: FieldError | undefined
    options?: SelectOption[]
}

export default function FormInput({ password, ref, error, options, ...inputProps }: FormInputProps) {

    const { line } = useTranslate()

    const [show, setShow] = useState<boolean | null>(null)

    useEffect(() => {
        typeof password == "boolean" && setShow(password)
    }, [password])

    console.log(options)

    return (
        <div className={`w-full h-10 sm:h-11 md:h-12 lg:h-8 xl:h-9 2xl:h-10 flex border rounded-[10px] sm:rounded-[11px] md:rounded-xl lg:rounded-lg xl:rounded-[9px] 2xl:rounded-[10px] bg-action ${error ? 'border-red-400/50 dark:border-red-500/50' : `border-action ${!options && 'focus-within:border-zinc-500/60 dark:focus-within:border-zinc-700'}`}`}>
            {
                options ?
                    <Select options={options} />
                    :
                    <input
                        ref={ref}
                        type={password ? (show ? "text" : "password") : "text"}
                        className={`size-full text-xs sm:text-[13px] md:text-sm lg:text-[10px] xl:text-[11px] 2xl:text-xs font-medium tracking-wider outline-none text-zinc-500 dark:text-zinc-300 placeholder:text-zinc-400 ${password ? 'pl-3.5 sm:pl-4 md:pl-4.5 lg:pl-3 xl:pl-3.75 2xl:pl-4' : 'px-3.5 sm:px-4 md:px-4.5 lg:px-3 xl:px-3.75 2xl:px-4'}`}
                        {...inputProps}
                        placeholder={line(inputProps.placeholder ?? 'notInformed')}
                    />
            }
            {
                password &&
                <ShowPassword show={show} toggle={setShow} />
            }
        </div>
    )
}