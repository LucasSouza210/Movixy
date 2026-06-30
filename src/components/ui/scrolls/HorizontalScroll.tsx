import { useEffect, useMemo, useRef, useState } from "react"

type CSSVars = React.CSSProperties & {
    [key: `--${string}`]: string | number
}

const breakpoints = [0, 640, 768, 1024, 1280, 1536]

export default function HorizontalScroll({ className, itemsPerView, gapPerBreakpoint, scrollBarHeight, children }: { className?: string, itemsPerView: number[], gapPerBreakpoint: number[], scrollBarHeight: number[], children: React.ReactNode }) {

    const containerRef = useRef<HTMLDivElement>(null)
    const [containerWidth, setContainerWidth] = useState(0)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const getValue = (values: number[], index: number): number => values[index] ?? getValue(values, index - 1)

    const breakpointIndex = useMemo(() => {
        let index = 0
        for (let i = 0; i < breakpoints.length; i++) {
            if (windowWidth >= breakpoints[i]) index = i
        }
        return index
    }, [windowWidth])

    const cols = getValue(itemsPerView, breakpointIndex)
    const gap = getValue(gapPerBreakpoint, breakpointIndex) * 0.25
    const scrollbar = getValue(scrollBarHeight, breakpointIndex) * 0.25

    const colSize = containerWidth > 0 ? `${(containerWidth - (cols - 1) * gap * 16) / cols}px` : `calc((100% - ${(cols - 1) * gap}rem) / ${cols})`

    const styles: CSSVars = {
        '--col-size': colSize,
        '--gap': `${gap}rem`,
        '--scrollbar': `${scrollbar}rem`,
    }

    useEffect(() => {
        const el = containerRef.current
        if (!el) return

        const observer = new ResizeObserver(([entry]) => {
            setContainerWidth(entry.contentRect.width)
            setWindowWidth(window.innerWidth)
        })

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div ref={containerRef} style={styles} className={`${className} grid grid-flow-col overflow-x-auto *:shrink-0 auto-cols-(--col-size) gap-(--gap) [&::-webkit-scrollbar]:h-(--scrollbar) [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:cursor-pointer [&::-webkit-scrollbar-thumb]:bg-zinc-300 dark:[&::-webkit-scrollbar-thumb]:bg-zinc-800 [&::-webkit-scrollbar-thumb:hover]:bg-zinc-400 dark:[&::-webkit-scrollbar-thumb:hover]:bg-zinc-700`}>
            {children}
        </div>
    )
}