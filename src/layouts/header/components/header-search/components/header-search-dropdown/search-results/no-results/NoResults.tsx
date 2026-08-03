import { useContext } from "react"
import { HeaderSearchContexts } from "../../../../../../../../contexts/HeaderSearchProvider"
import { useTranslate } from "../../../../../../../../translations/Translations"
import NoResultsMessage from "./NoResultsMessage"

export default function NoResults() {

    const projectsContexts = useContext(HeaderSearchContexts)

    const { search } = projectsContexts!

    const { line } = useTranslate()

    return (
        <div className="flex-1 flex flex-col justify-start">
            <p className="w-full min-w-0 h-fit flex items-center text-sm sm:text-base md:text-lg lg:text-sm xl:text-base 2xl:text-lg font-medium tracking-wider leading-4.5 sm:leading-5.5 md:leading-6.5 lg:leading-4.5 xl:leading-5.5 2xl:leading-6.5 text-zinc-600 dark:text-zinc-300">
                {line('noResultsFor')} "<span className="min-w-0 truncate max-w-1/5 text-orange-500 dark:text-orange-500">{search}</span>"
            </p>
            <div className="flex-1 flex items-center justify-center">
                <NoResultsMessage />
            </div>
        </div>
    )
}