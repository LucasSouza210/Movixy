import { useId, useMemo } from "react"
import { OverlayScrollbarsComponent } from "overlayscrollbars-react"

const screens = [640, 768, 1024, 1280, 1536]

function getValue(values: number[], index: number): number {
    if (values.length === 0) return 1
    return values[index] ?? getValue(values, Math.max(0, index - 1))
}

function buildResponsiveCSS(scope: string, itemsPerView: number[], gapPerBreakpoint: number[]) {
    const all = [0, ...screens]
    return all.map((bp, i) => {
        const rows = getValue(itemsPerView, i)
        const gap = getValue(gapPerBreakpoint, i) * 0.25
        const decl = `.${scope}{--rows:${rows};--gap:${gap}rem;}`
        return bp === 0 ? decl : `@media (min-width:${bp}px){${decl}}`
    }).join("\n")
}

export default function VerticalScroll({ className, itemsPerView, gapPerBreakpoint, children, }: { className?: string, itemsPerView: number[], gapPerBreakpoint: number[], children: React.ReactNode }) {
    const reactId = useId().replace(/:/g, "")
    const scope = `vs-${reactId}`

    const css = useMemo(() => buildResponsiveCSS(scope, itemsPerView, gapPerBreakpoint), [scope, itemsPerView, gapPerBreakpoint])

    return (
        <OverlayScrollbarsComponent defer className={`size-full ${className ?? ""}`}>
            <style>{css}</style>
            <div className={`${scope} size-full grid grid-flow-row *:shrink-0 relative gap-(--gap)`} style={{ gridAutoRows: "calc((100% - (var(--rows) - 1) * var(--gap)) / var(--rows))", }}>
                {children}
            </div>
        </OverlayScrollbarsComponent>
    )
}