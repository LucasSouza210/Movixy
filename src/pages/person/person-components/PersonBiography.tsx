import { useEffect, useRef, useState } from "react"
import { useTranslate } from "../../../translations/Translations"
import type { PersonCredit, PersonDetails } from "../../../types/tmdb"
import PersonInfo from "./person-perfil/person-info/PersonInfo"
import PersonName from "./person-perfil/person-info/person-name/PersonName"

export default function PersonBiography({ person, biography, credits, loading }: { person: PersonDetails | null, biography: string | undefined, credits: PersonCredit[], loading: boolean }) {

    const { line } = useTranslate()
    const [expanded, setExpanded] = useState(false)
    const [isClamped, setIsClamped] = useState(false)
    const textRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const el = textRef.current
        if (!el) return
        setIsClamped(el.scrollHeight > el.clientHeight)
    }, [biography])

    return (
            <div className="w-full flex flex-col lg:gap-2.5 xl:gap-3 2xl:gap-3.5">
                <div className="w-full hidden lg:flex">
                    <PersonName name={person?.name} loading={loading} />
                </div>
                <div className="flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-2 xl:gap-2.5 2xl:gap-3">
                    <p className="font-medium text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl tracking-wider md:tracking-widest lg:tracking-wider leading-none text-black dark:text-white">{line('biographyTitle')}</p>
                    <p className="flex flex-col items-start font-medium text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base leading-5 sm:leading-6 md:leading-7 lg:leading-4.5 xl:leading-5.25 2xl:leading-6 text-zinc-600 dark:text-zinc-300">
                        <span ref={textRef} className={`${!expanded && 'line-clamp-2'}`}>
                            {
                                biography ?? line('noBiography')
                            }
                        </span>
                        {isClamped && biography && (
                            <button className="transition-all duration-300 cursor-pointer ease-in-out text-orange-500 hover:text-orange-600 dark:text-orange-500 dark:hover:text-orange-400" onClick={() => setExpanded(prev => !prev)}>
                                {line(expanded ? 'readLess' : 'readMore')}
                            </button>
                        )}
                    </p>
                </div>
                <div className="hidden lg:block">
                    <PersonInfo person={person} credits={credits} loading={loading} />
                </div>
            </div>
    )
}