import { useState } from "react"
import { useTranslate } from "../../../../../../../../../translations/Translations"

const limit = 100

export default function OverviewText({ overview }: { overview: string | undefined }) {

    const { line } = useTranslate()

    const [expanded, setExpanded] = useState(false)

    const isLong = (overview?.length ?? 0) > limit

    const text = overview ? expanded ? overview : overview.slice(0, limit) : line("overviewUnavailable")

    return (
        <p className="w-full lg:max-w-9/10 font-medium text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base tracking-wider leading-6 sm:leading-7 md:leading-8 lg:leading-5.5 xl:leading-6.25 2xl:leading-7 text-default">
            {text}{!expanded && isLong && overview && "..."}{" "}
            {isLong && overview && (
                <button className="transition-all duration-300 cursor-pointer ease-in-out text-orange-500 hover:text-orange-600 dark:text-orange-500 dark:hover:text-orange-400" onClick={() => setExpanded(prev => !prev)}>
                    {line(expanded ? "readLess" : "readMore")}
                </button>
            )}
        </p>
    )
}