import { useState } from "react"
import { useTranslate } from "../../../translations/Translations"

export default function ActorBiography({ biography }: { biography: string }) {

    const { line } = useTranslate()

    const [expanded, setExpanded] = useState(false)

    const limit = 160

    const isLong = biography?.length! > limit

    const text = biography ? (expanded ? biography : biography?.slice(0, limit)) : line('noBiography')

    return (
        <div className="w-full flex flex-col gap-3">
            <p className="font-medium text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl tracking-wider md:tracking-widest lg:tracking-wider leading-none text-black dark:text-white">{line('biographyTitle')}</p>
            <p className="font-medium text-sm leading-5 text-zinc-600 dark:text-zinc-300">
                {text}{!expanded && isLong && '...'} {
                    isLong && <button className="transition-all duration-300 cursor-pointer ease-in-out text-orange-500 hover:text-orange-600 dark:text-orange-500 dark:hover:text-orange-400 lg:text-zinc-200 lg:hover:text-white" onClick={() => setExpanded(prev => !prev)}>{line(expanded ? 'readLess' : 'readMore')}</button>
                }
            </p>
        </div>
    )
}