import { useTranslate } from "../../../../../../../translations/Translations"

export default function Title() {

    const { line } = useTranslate()

    return (
        <p className="text-lg sm:text-[19px] md:text-xl lg:text-lg xl:text-[19px] 2xl:text-xl font-semibold tracking-wider text-black dark:text-white">
            {line('newListModalTitle')}
        </p>
    )
}