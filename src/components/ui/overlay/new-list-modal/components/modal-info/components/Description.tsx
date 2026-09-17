import { useTranslate } from "../../../../../../../translations/Translations"

export default function Description() {

    const { line } = useTranslate()

    return (
        <p className="text-xs sm:text-[13px] md:text-sm lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider leading-5.5 text-default">
            {line('createListDescription')}
        </p>
    )
}