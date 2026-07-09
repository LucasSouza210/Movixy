import { useId, useMemo } from "react"

const screens = [640, 768, 1024, 1280, 1536]

function getValue(values: number[], index: number): number {
    if (values.length === 0) return 1
    return values[index] ?? getValue(values, Math.max(0, index - 1))
}

function buildResponsiveCSS(scope: string, itemsPerView: number[], gapPerBreakpoint: number[], scrollBarHeight: number[]) {
    const all = [0, ...screens]
    return all
        .map((bp, i) => {
            const cols = getValue(itemsPerView, i)
            const gap = getValue(gapPerBreakpoint, i) * 0.25
            const scrollbar = getValue(scrollBarHeight, i) * 0.25
            const decl = `.${scope}{--cols:${cols};--gap:${gap}rem;--scrollbar:${scrollbar}rem;}`
            return bp === 0 ? decl : `@media (min-width:${bp}px){${decl}}`
        })
        .join("\n")
}

export default function HorizontalScroll({ className, itemsPerView, gapPerBreakpoint, scrollBarHeight, children, }: { className?: string, itemsPerView: number[], gapPerBreakpoint: number[], scrollBarHeight: number[], children: React.ReactNode }) {
    const reactId = useId().replace(/:/g, "")
    const scope = `hs-${reactId}`

    const css = useMemo(() => buildResponsiveCSS(scope, itemsPerView, gapPerBreakpoint, scrollBarHeight), [scope, itemsPerView, gapPerBreakpoint, scrollBarHeight])

    return (
        <>
            <style>{css}</style>
            <div
                className={`${scope} ${className ?? ""} grid grid-flow-col overflow-x-auto *:shrink-0 gap-(--gap) [&::-webkit-scrollbar]:h-(--scrollbar) [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:cursor-pointer [&::-webkit-scrollbar-thumb]:bg-zinc-300 dark:[&::-webkit-scrollbar-thumb]:bg-zinc-800 [&::-webkit-scrollbar-thumb:hover]:bg-zinc-400 dark:[&::-webkit-scrollbar-thumb:hover]:bg-zinc-700`}
                style={{ gridAutoColumns: "calc((100% - (var(--cols) - 1) * var(--gap)) / var(--cols))", }}>
                {children}
            </div>
        </>
    )
}