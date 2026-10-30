import { useContext } from "react"
import { HeaderSearchContexts } from "../../../../../../../../../contexts/HeaderSearchProvider"
import { useTranslate } from "../../../../../../../../../translations/Translations"

export default function Title() {

    const { search } = useContext(HeaderSearchContexts)!

    const { line } = useTranslate()

    const truncatedSearch = search && search.length > 4 ? `${search.slice(0, 4)}...` : search

    return (
        <p className="w-full h-fit inline-flex text-sm sm:text-base md:text-lg lg:text-sm xl:text-base 2xl:text-lg font-medium tracking-wider text-default">
            {line('noResultsFor')} "<span className="min-w-0 truncate max-w-1/4 text-orange-500 dark:text-orange-500">{truncatedSearch}</span>"
        </p>
    )
}