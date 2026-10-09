import { useTranslate } from "../../../../../../../../../../../translations/Translations"

export default function Suggestion() {

    const { line } = useTranslate()

    return (
        <p className="max-w-8/10 sm:max-w-7/10 lg:max-w-none xl:max-w-7/10 text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wider leading-5.5 sm:leading-6.25 md:leading-7 lg:leading-5.5 xl:leading-6.25 2xl:leading-7 text-center text-default">
            {line('checkSpelling')}
        </p>
    )
}