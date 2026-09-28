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

export default function LimitedGridScroll({ className, columnsPerView, rowsPerView, gapPerBreakpoint, children, }: { className?: string, columnsPerView: number[], rowsPerView: number[], gapPerBreakpoint: number[], children: React.ReactNode }) {
    const reactId = useId().replace(/:/g, "")
    const scope = `lgs-${reactId}`

    const gridRef = useRef<HTMLDivElement>(null)
    const [fixedHeight, setFixedHeight] = useState<number | null>(null)
    const [rowHeight, setRowHeight] = useState<number | null>(null)
    const [rowCount, setRowCount] = useState<number>(1)

    const css = useMemo(() => buildResponsiveCSS(scope, columnsPerView, rowsPerView, gapPerBreakpoint), [scope, columnsPerView, rowsPerView, gapPerBreakpoint])

    useEffect(() => {
        function measure() {
            const el = gridRef.current
            if (!el) return

            const firstCard = el.children[0] as HTMLElement | undefined
            if (!firstCard) return

            const cardHeight = firstCard.getBoundingClientRect().height
            const gapPx = parseFloat(getComputedStyle(el).rowGap || "0")
            const rows = parseFloat(getComputedStyle(el).getPropertyValue("--rows")) || 1

            setFixedHeight(rows * cardHeight + (rows - 1) * gapPx)
            setRowHeight(cardHeight)
            setRowCount(rows)
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
                    gridTemplateRows: rowHeight ? `repeat(${rowCount}, ${rowHeight}px)` : undefined,
                }}>
                    {children}
                </div>
            </OverlayScrollbarsComponent>
        </>
    )
}