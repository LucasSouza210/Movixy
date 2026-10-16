import { useEffect, useId, useMemo, useRef, useState } from "react"
import { OverlayScrollbarsComponent } from "overlayscrollbars-react"

const screens = [640, 768, 1024, 1280, 1536]

function getValue(values: number[], index: number): number {
    if (values.length === 0) return 1
    return values[index] ?? getValue(values, Math.max(0, index - 1))
}

function buildResponsiveCSS(scope: string, columnsPerView: number[], rowsPerView: number[], gapPerBreakpoint: number[]) {
    const all = [0, ...screens]
    return all
        .map((bp, i) => {
            const cols = getValue(columnsPerView, i),
                rows = getValue(rowsPerView, i),
                gap = getValue(gapPerBreakpoint, i) * 0.25,
                decl = `.${scope}{--cols:${cols};--rows:${rows};--gap:${gap}rem;}`;

            return bp === 0 ? decl : `@media (min-width:${bp}px){${decl}}`
        })
        .join("\n")
}

export default function LimitedRowsScroll({ className, columnsPerView, rowsPerView, gapPerBreakpoint, children, }: { className?: string, columnsPerView: number[], rowsPerView: number[], gapPerBreakpoint: number[], children: React.ReactNode }) {
    const reactId = useId().replace(/:/g, ""),
        scope = `lgs-${reactId}`;

    const gridRef = useRef<HTMLDivElement>(null)

    const [fixedHeight, setFixedHeight] = useState<number | null>(null),
        [rowHeights, setRowHeights] = useState<number[]>([]);

    const css = useMemo(() => buildResponsiveCSS(scope, columnsPerView, rowsPerView, gapPerBreakpoint), [scope, columnsPerView, rowsPerView, gapPerBreakpoint])

    useEffect(() => {
        function measure() {
            const el = gridRef.current
            if (!el) return

            const items = Array.from(el.children) as HTMLElement[]
            if (items.length === 0) return

            const previousGridTemplateRows = el.style.gridTemplateRows
            el.style.gridTemplateRows = ""

            const cols = Math.round(parseFloat(getComputedStyle(el).getPropertyValue("--cols"))) || 1
            const rows = Math.round(parseFloat(getComputedStyle(el).getPropertyValue("--rows"))) || 1
            const gapPx = parseFloat(getComputedStyle(el).rowGap || "0")

            const heights: number[] = []
            for (let i = 0; i < items.length; i += cols) {
                const rowItems = items.slice(i, i + cols)
                const tallestInRow = rowItems.reduce((max, item) => {
                    const height = item.getBoundingClientRect().height
                    return height > max ? height : max
                }, 0)
                heights.push(tallestInRow)
            }

            el.style.gridTemplateRows = previousGridTemplateRows

            const fallbackHeight = Math.max(...heights, 0)
            const limited = Array.from({ length: rows }, (_, i) => heights[i] ?? fallbackHeight)

            setFixedHeight(limited.reduce((sum, h) => sum + h, 0) + gapPx * (limited.length - 1))
            setRowHeights(limited)
        }

        measure()

        const observer = new ResizeObserver(measure)
        if (gridRef.current) observer.observe(gridRef.current)

        window.addEventListener("resize", measure)
        return () => {
            observer.disconnect()
            window.removeEventListener("resize", measure)
        }
    }, [children])

    return (
        <>
            <style>{css}</style>
            <OverlayScrollbarsComponent defer className={`${scope} ${className ?? ""}`} style={{ height: fixedHeight ? `${fixedHeight}px` : undefined }} options={{ scrollbars: { autoHide: "leave", theme: "os-theme-dark" } }}>
                <div ref={gridRef} className="grid gap-(--gap)" style={{
                    gridTemplateColumns: "repeat(var(--cols), minmax(0, 1fr))",
                    gridTemplateRows: rowHeights.length > 0 ? rowHeights.map(h => `${h}px`).join(" ") : undefined,
                }}>
                    {children}
                </div>
            </OverlayScrollbarsComponent>
        </>
    )
}