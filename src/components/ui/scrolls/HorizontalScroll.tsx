import { useEffect, useId, useMemo, useRef } from "react"

const screens = [640, 768, 1024, 1280, 1536]

const DEFAULT_ACTIVE_SELECTOR = '[data-active="true"], [aria-selected="true"], [aria-current="true"], [aria-current="page"]'

type Align = "nearest" | "center"

type HorizontalScrollProps = {
    className?: string
    itemsPerView: number[]
    gapPerBreakpoint: number[]
    scrollBarHeight: number[]
    children: React.ReactNode
    scrollToActive?: boolean
    activeKey?: string | number | null
    activeSelector?: string
    activeAlign?: Align
    activeOffset?: number
}

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

function getScrollDelta(container: HTMLElement, target: HTMLElement, align: Align, offset: number): number {
    const c = container.getBoundingClientRect()
    const t = target.getBoundingClientRect()

    if (align === "center") {
        return (t.left + t.width / 2) - (c.left + c.width / 2)
    }

    if (t.left < c.left + offset) return t.left - (c.left + offset)
    if (t.right > c.right - offset) return t.right - (c.right - offset)
    return 0
}

export default function HorizontalScroll({ className, itemsPerView, gapPerBreakpoint, scrollBarHeight, children, scrollToActive = false, activeKey, activeSelector = DEFAULT_ACTIVE_SELECTOR, activeAlign = "nearest", activeOffset = 8,}: HorizontalScrollProps) {
    
    const reactId = useId().replace(/:/g, "")
    const scope = `hs-${reactId}`
    const containerRef = useRef<HTMLDivElement>(null)
    const hasPositioned = useRef(false)

    const css = useMemo(
        () => buildResponsiveCSS(scope, itemsPerView, gapPerBreakpoint, scrollBarHeight),
        [scope, itemsPerView, gapPerBreakpoint, scrollBarHeight]
    )

    useEffect(() => {
        if (!scrollToActive) return

        const container = containerRef.current
        const target = container?.querySelector<HTMLElement>(activeSelector)
        if (!container || !target) return

        const delta = getScrollDelta(container, target, activeAlign, activeOffset)

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        const behavior: ScrollBehavior = !hasPositioned.current || reduceMotion ? "auto" : "smooth"
        hasPositioned.current = true

        if (Math.abs(delta) >= 1) container.scrollBy({ left: delta, behavior })
    }, [scrollToActive, activeKey, activeSelector, activeAlign, activeOffset])

    return (
        <>
            <style>{css}</style>
            <div ref={containerRef} className={`${scope} ${className ?? ""} grid grid-flow-col overflow-x-auto *:shrink-0 gap-(--gap) [&::-webkit-scrollbar]:h-(--scrollbar) [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:cursor-pointer [&::-webkit-scrollbar-thumb]:bg-zinc-300 dark:[&::-webkit-scrollbar-thumb]:bg-zinc-800 [&::-webkit-scrollbar-thumb:hover]:bg-zinc-400 dark:[&::-webkit-scrollbar-thumb:hover]:bg-zinc-700`} style={{ gridAutoColumns: "calc((100% - (var(--cols) - 1) * var(--gap)) / var(--cols))" }}>
                {children}
            </div>
        </>
    )
}