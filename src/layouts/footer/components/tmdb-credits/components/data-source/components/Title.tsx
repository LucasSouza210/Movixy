import { useTranslate } from "../../../../../../../translations/Translations"

export default function Title() {

    const { line } = useTranslate()

    return (
        <p className="text-xs sm:text-sm md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm font-semibold tracking-widest uppercase text-zinc-400">
            {line('providedBy')}
        </p>
    )
}