import { useState } from "react"
import { useTranslate } from "../../../translations/Translations"

export default function MediaOverview({ overview }: { overview: string | undefined }) {

    const { line } = useTranslate()

    const [expanded, setExpanded] = useState(false)

    const limit = 100

    const isLong = overview?.length! > limit

    const text = expanded ? overview : overview?.slice(0, limit)

    return (
        <div className="w-full flex flex-col gap-2 sm:gap-2.25 md:gap-2.5">
            <p className="font-medium text-base sm:text-[17px] md:text-lg tracking-wider md:tracking-widest leading-none text-black dark:text-white">{line('mediaOverview')}</p>
            <p className="font-medium text-sm sm:text-[15px] md:text-base tracking-wider leading-5.5 sm:leading-6 md:leading-6.5 text-zinc-700 dark:text-zinc-300">
                {text}{!expanded && isLong && '...'} {
                    isLong && <button className="transition-all duration-300 cursor-pointer ease-in-out text-zinc-800 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-zinc-100" onClick={() => setExpanded(prev => !prev)}>{line(expanded ? 'readLess' : 'readMore')}</button>
                }
            </p>
        </div>
    )
}