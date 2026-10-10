import { useContext, useEffect, useRef, useState } from "react"
import { ExplorerContexts } from "../../../../../../../../../../../../contexts/SeasonExplorerProvider"
import Expand from "./components/Expand"
import Measurer from "./components/Measurer"

export default function Overview({ overview }: { overview: string }) {

    const explorer = useContext(ExplorerContexts)
    const { selectedEp } = explorer!

    const [expanded, setExpanded] = useState(false)
    const [isLong, setIsLong] = useState(false)
    const textRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        setExpanded(false)
    }, [selectedEp])

    useEffect(() => {
        const element = textRef.current
        if (!element) return

        setIsLong(element.scrollHeight > element.clientHeight)
    }, [overview])

    return (
        <p className="relative lg:max-w-6/10 text-sm sm:text-base md:text-lg lg:text-xs 2xl:text-base font-medium tracking-wider leading-5.5 sm:leading-6.5 md:leading-7.5 lg:leading-5 2xl:leading-6 text-zinc-400">
            <Measurer overview={overview} textRef={textRef} />
            <span className={expanded ? "lg:line-clamp-6" : "line-clamp-3"}>
                {`${overview} `}
            </span>
            {
                isLong &&
                <Expand expanded={expanded} setExpanded={setExpanded} />
            }
        </p>
    )
}