import { useTranslate } from "../../../../../../../translations/Translations"

export default function Title() {

    const { line } = useTranslate()

    return (
        <p className="text-lg sm:text-[19px] md:text-xl lg:text-base xl:text-[17px] 2xl:text-lg font-semibold tracking-wider text-title">
            {line('newListModalTitle')}
        </p>
    )
}