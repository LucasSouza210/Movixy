import { useState } from "react"
import { useTranslate } from "../../../translations/Translations"

export default function MediaOverview({ overview }: { overview: string | undefined }) {

    const { line } = useTranslate()

    const [expanded, setExpanded] = useState(false)

    const limit = 100

    const isLong = overview?.length! > limit

    const text = overview ? (expanded ? overview : overview?.slice(0, limit)) : line('overviewUnavailable')

    return (
        <div className="w-full flex flex-col gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-1.5 xl:gap-2 2xl:gap-2.5">
            <p className="font-medium text-base sm:text-lg md:text-xl lg:text-sm xl:text-base 2xl:text-lg tracking-wider md:tracking-widest lg:tracking-wider leading-none text-black dark:text-white">{line('mediaOverview')}</p>
            <p className={`${expanded ? 'w-full' : 'lg:max-w-4/5'} font-medium text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base tracking-wider leading-5.5 sm:leading-6.25 md:leading-7 lg:leading-4.5 xl:leading-5.25 2xl:leading-6 text-zinc-700 dark:text-zinc-300`}>
                {text}{!expanded && isLong && overview && '...'} {
                    isLong && overview && <button className="transition-all duration-300 cursor-pointer ease-in-out text-orange-500 hover:text-orange-600 dark:text-orange-500 dark:hover:text-orange-400" onClick={() => setExpanded(prev => !prev)}>{line(expanded ? 'readLess' : 'readMore')}</button>
                }
            </p>
        </div>
    )
}