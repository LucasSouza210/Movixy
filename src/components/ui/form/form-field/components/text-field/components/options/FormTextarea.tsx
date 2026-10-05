import type { Ref, TextareaHTMLAttributes } from "react"
import { useTranslate } from "../../../../../../../../translations/Translations"

export default function FormTextarea({ ref, maxLength, inputProps }: { ref: Ref<HTMLTextAreaElement>, maxLength?: number, inputProps: TextareaHTMLAttributes<HTMLTextAreaElement> }) {

    const { line } = useTranslate()

    return (
        <textarea ref={ref} maxLength={maxLength} className="size-full items-start flex resize-none p-3.5 sm:p-4 md:p-4.5 lg:p-3 xl:p-3.75 2xl:p-4 text-xs sm:text-[13px] md:text-sm lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider leading-5 sm:leading-5.5 md:leading-6 lg:leading-5 xl:leading-5.5 2xl:leading-6 outline-none text-default placeholder:text-zinc-400" {...(inputProps)} placeholder={line(inputProps.placeholder ?? 'notInformed')} />
    )
}