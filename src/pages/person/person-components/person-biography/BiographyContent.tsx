import { useEffect, useRef, useState } from "react"
import { useTranslate } from "../../../../translations/Translations"

export default function BiographyContent({ biography }: { biography: string | undefined }) {

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
    )
}