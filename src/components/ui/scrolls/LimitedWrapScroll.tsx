import { useCallback, useId, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react"
import type { PartialOptions } from "overlayscrollbars"
import { OverlayScrollbarsComponent } from "overlayscrollbars-react"

const screens = [640, 768, 1024, 1280, 1536]

const scrollOptions: PartialOptions = {
    scrollbars: {
        autoHide: "never",
        theme: "os-theme-dark"
    }
}

function getValue(values: number[], index: number): number {
    if (values.length === 0) return 0
    return values[index] ?? getValue(values, Math.max(0, index - 1))
}

function buildResponsiveCSS(scope: string, rowsPerView: number[], gapPerBreakpoint: number[]) {
    const all = [0, ...screens]
    return all
        .map((bp, i) => {
            const rows = getValue(rowsPerView, i),
                gap = getValue(gapPerBreakpoint, i) * 0.25,
                decl = `.${scope}{--rows:${rows};--gap:${gap}rem;}`;

            return bp === 0 ? decl : `@media (min-width:${bp}px){${decl}}`
        })
        .join("\n")
}

type LimitedWrapScrollProps = {
    className?: string
    contentClassName?: string
    rowsPerView: number[]
    gapPerBreakpoint: number[]
    children: ReactNode
}

export default function LimitedWrapScroll({ className, contentClassName, rowsPerView, gapPerBreakpoint, children }: LimitedWrapScrollProps) {

    const reactId = useId().replace(/:/g, ""),
        scope = `lws-${reactId}`;

    const contentRef = useRef<HTMLDivElement>(null)

    const [limitHeight, setLimitHeight] = useState<number | null>(null)

    const css = useMemo(() => buildResponsiveCSS(scope, rowsPerView, gapPerBreakpoint), [scope, rowsPerView, gapPerBreakpoint])

    const measure = useCallback(() => {
        const content = contentRef.current

        if (!content) return

        const rows = Math.round(parseFloat(getComputedStyle(content).getPropertyValue("--rows"))) || 0

        const items = Array.from(content.children) as HTMLElement[]

        if (rows < 1 || items.length === 0) {
            setLimitHeight(null)
            return
        }

        const contentTop = content.getBoundingClientRect().top

        const rects = items.map((item) => {
            const rect = item.getBoundingClientRect()
            return { top: rect.top - contentTop, bottom: rect.bottom - contentTop }
        })

        const sortedRects = [...rects].sort((a, b) => a.top - b.top)

        let rowCount = 0
        let rowBottom = -Infinity
        let limit = 0
        let exceeded = false

        for (const rect of sortedRects) {
            if (rect.top >= rowBottom - 1) {
                rowCount += 1

                if (rowCount > rows) {
                    exceeded = true
                    break
                }

                rowBottom = rect.bottom
            } else {
                rowBottom = Math.max(rowBottom, rect.bottom)
            }

            limit = Math.max(limit, rect.bottom)
        }

        setLimitHeight(exceeded ? Math.ceil(limit) : null)
    }, [])

    useLayoutEffect(() => {
        measure()

        const content = contentRef.current

        const resizeObserver = new ResizeObserver(() => measure())

        if (content) resizeObserver.observe(content)

        window.addEventListener("resize", measure)

        return () => {
            resizeObserver.disconnect()
            window.removeEventListener("resize", measure)
        }
    }, [measure, css])

    return (
        <>
            <style>{css}</style>
            <OverlayScrollbarsComponent defer className={`${scope} ${className ?? ""}`} style={limitHeight === null ? undefined : { height: `${limitHeight}px` }} options={scrollOptions}>
                <div ref={contentRef} className={`flex flex-wrap gap-(--gap) ${contentClassName ?? ""}`}>
                    {children}
                </div>
            </OverlayScrollbarsComponent>
        </>
    )
}