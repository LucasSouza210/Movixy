import type { Ref, TextareaHTMLAttributes } from "react"
import { useTranslate } from "../../../../../../../../translations/Translations"

export default function FormTextarea({ ref, maxLength, inputProps }: { ref: Ref<HTMLTextAreaElement>, maxLength?: number, inputProps: TextareaHTMLAttributes<HTMLTextAreaElement> }) {

    const { line } = useTranslate()

    return (
        <textarea ref={ref} maxLength={maxLength} className="size-full items-start flex resize-none py-2.5 sm:py-3 md:py-3.5 lg:py-2 xl:py-2.5 2xl:py-3 px-3.5 sm:px-4 md:px-4.5 lg:px-3 xl:px-3.75 2xl:px-4 text-xs sm:text-[13px] md:text-sm lg:text-[10px] xl:text-[11px] 2xl:text-xs font-medium tracking-wider leading-5 sm:leading-5.5 md:leading-6 lg:leading-4 xl:leading-4.5 2xl:leading-5 outline-none text-default placeholder:text-zinc-400" {...(inputProps)} placeholder={line(inputProps.placeholder ?? 'notInformed')} />
    )
}