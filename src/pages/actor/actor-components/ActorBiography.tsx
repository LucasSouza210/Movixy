import { useState } from "react"
import { useTranslate } from "../../../translations/Translations"
import type { ActorDetails } from "../../../types/tmdb"
import ActorInfo from "./actor-perfil/actor-info/ActorInfo"

export default function ActorBiography({ actor, biography }: { actor: ActorDetails, biography: string }) {

    const { line } = useTranslate()

    const [expanded, setExpanded] = useState(false)

    const limit = window.innerWidth >= 1024 ? 180 : 100

    const isLong = biography?.length! > limit

    const text = biography ? (expanded ? biography : biography?.slice(0, limit)) : line('noBiography')

    return (
        <div className="w-full flex flex-col lg:gap-4">
            <p className="hidden lg:block text-lg font-medium tracking-wider leading-none text-black dark:text-white">{actor.name}</p>
            <div className="flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-2">
                <p className="font-medium text-base sm:text-lg md:text-xl lg:text-sm xl:text-base 2xl:text-lg tracking-wider md:tracking-widest lg:tracking-wider leading-none text-black dark:text-white">{line('biographyTitle')}</p>
                <p className="font-medium text-sm sm:text-base md:text-lg lg:text-xs leading-5 sm:leading-6 md:leading-7 lg:leading-4.5 text-zinc-600 dark:text-zinc-300">
                    {text}{!expanded && isLong && '...'} {
                        isLong && <button className="transition-all duration-300 cursor-pointer ease-in-out text-orange-500 hover:text-orange-600 dark:text-orange-500 dark:hover:text-orange-400 lg:text-zinc-200 lg:hover:text-white" onClick={() => setExpanded(prev => !prev)}>{line(expanded ? 'readLess' : 'readMore')}</button>
                    }
                </p>
            </div>
            <div className="hidden lg:block">
                <ActorInfo actor={actor} />
            </div>
        </div>
    )
}