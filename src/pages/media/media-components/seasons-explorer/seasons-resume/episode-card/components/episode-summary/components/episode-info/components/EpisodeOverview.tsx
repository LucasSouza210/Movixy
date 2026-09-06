import { useState } from "react"
import { useTranslate } from "../../../../../../../../../../../translations/Translations"

export default function EpisodeOverview({ overview }: { overview: string }) {

    const { line } = useTranslate()

    const [expanded, setExpanded] = useState(false)

    const limit = 76,
        isLong = overview?.length! > limit;

    return (
        <p className="lg:max-w-6/10 text-sm sm:text-base md:text-lg lg:text-xs 2xl:text-base font-medium tracking-wider leading-5.5 sm:leading-6.5 md:leading-7.5 lg:leading-5 2xl:leading-6 text-zinc-600 dark:text-zinc-400 lg:text-zinc-300">
            <span className={`${expanded ? 'lg:line-clamp-6' : 'line-clamp-3'}`}>
                {overview}
            </span> {
                isLong && <button className="transition-all duration-300 cursor-pointer ease-in-out text-zinc-800 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-zinc-100 lg:text-zinc-200 lg:hover:text-white" onClick={() => setExpanded(prev => !prev)}>
                    {line(expanded ? 'readLess' : 'readMore')}
                </button>
            }
        </p>
    )
}