import { useState } from "react"
import { useTranslate } from "../../../translations/Translations"

export default function MediaOverview({ overview }: { overview: string | undefined }) {

    const { line } = useTranslate()

    const [expanded, setExpanded] = useState(false)

    const limit = 100

    const isLong = overview?.length! > limit

    const text = expanded ? overview : overview?.slice(0, limit)

    return (
        <div className="w-full flex flex-col gap-2">
            <p className="font-medium text-base tracking-wider leading-none text-black dark:text-white">{line('mediaOverview')}</p>
            <p className="font-medium text-sm tracking-wider leading-5.5 text-zinc-700 dark:text-zinc-300">
                {text}{!expanded && isLong && '...'} {
                    isLong && <button className="transition-all duration-300 cursor-pointer ease-in-out text-zinc-800 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-zinc-100" onClick={() => setExpanded(prev => !prev)}>{line(expanded ? 'readLess' : 'readMore')}</button>
                }
            </p>
        </div>
    )
}