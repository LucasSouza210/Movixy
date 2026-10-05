import { useTranslate } from "../../../../../../../translations/Translations"

export default function Description() {

    const { line } = useTranslate()

    return (
        <p className="max-w-full min-w-0 text-wrap text-sm sm:text-[15px] md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider leading-6 sm:leading-6.5 md:leading-7 lg:leading-5 xl:leading-5.5 2xl:leading-6 text-default">
            {line('createListDescription')}
        </p>
    )
}