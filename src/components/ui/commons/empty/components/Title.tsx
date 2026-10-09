import { useTranslate } from "../../../../../translations/Translations"

export default function Title({ results }: { results?: boolean }) {

    const { line } = useTranslate()

    return (
        <p className="max-w-7/10 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wider leading-6 sm:leading-7 md:leading-8 lg:leading-5.5 xl:leading-6.25 2xl:leading-7 text-center text-default">
            {line(results ? 'noProjectsFound' : 'noContentInList')}
        </p>
    )
}