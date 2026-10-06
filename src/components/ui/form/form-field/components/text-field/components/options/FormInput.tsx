import type { InputHTMLAttributes, Ref } from "react"
import { useTranslate } from "../../../../../../../../translations/Translations"

export default function FormInput({ ref, maxLength, password, show, inputProps }: { ref: Ref<HTMLInputElement>, maxLength?: number, password?: boolean, show?: boolean | null, inputProps: InputHTMLAttributes<HTMLInputElement> }) {

    const { line } = useTranslate()

    return (
        <input ref={ref} type={password ? (show ? "text" : "password") : "text"} maxLength={maxLength} className={`size-full flex items-center text-xs sm:text-[13px] md:text-sm lg:text-[10px] xl:text-[11px] 2xl:text-xs font-medium tracking-wider outline-none text-default placeholder:text-zinc-400 ${password ? 'pl-3.5 sm:pl-4 md:pl-4.5 lg:pl-3 xl:pl-3.75 2xl:pl-4' : 'px-3.5 sm:px-4 md:px-4.5 lg:px-3 xl:px-3.75 2xl:px-4'}`} {...inputProps} placeholder={line(inputProps.placeholder ?? 'notInformed')} />
    )
}