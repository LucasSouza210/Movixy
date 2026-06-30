import { useEffect, useMemo, useRef, useState } from "react"
import { OverlayScrollbarsComponent } from "overlayscrollbars-react"

type CSSVars = React.CSSProperties & {
    [key: `--${string}`]: string | number
}

const breakpoints = [0, 640, 768, 1024, 1280, 1536]

export default function VerticalScroll({ className, itemsPerView, gapPerBreakpoint, children }: { className?: string, itemsPerView: number[], gapPerBreakpoint: number[], children: React.ReactNode }) {

    const containerRef = useRef<HTMLDivElement>(null)
    const [containerHeight, setContainerHeight] = useState(0)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const getValue = (values: number[], index: number): number => values[index] ?? getValue(values, index - 1)

    const breakpointIndex = useMemo(() => {
        let index = 0
        for (let i = 0; i < breakpoints.length; i++) {
            if (windowWidth >= breakpoints[i]) index = i
        }
        return index
    }, [windowWidth])

    const rows = getValue(itemsPerView, breakpointIndex)
    const gap = getValue(gapPerBreakpoint, breakpointIndex) * 0.25

    const rowSize = containerHeight > 0 ? `${(containerHeight - (rows - 1) * gap * 16) / rows}px` : `calc((100% - ${(rows - 1) * gap}rem) / ${rows})`

    const styles: CSSVars = {
        '--row-size': rowSize,
        '--gap': `${gap}rem`,
    }

    useEffect(() => {
        const el = containerRef.current
        if (!el) return

        const observer = new ResizeObserver(([entry]) => {
            setContainerHeight(entry.contentRect.height)
            setWindowWidth(window.innerWidth)
        })

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <OverlayScrollbarsComponent defer className={`size-full ${className ?? ""}`}>
            <div ref={containerRef} style={styles} className="size-full grid grid-flow-row *:shrink-0 relative auto-rows-(--row-size) gap-(--gap)">
                {children}
            </div>
        </OverlayScrollbarsComponent>
    )
}