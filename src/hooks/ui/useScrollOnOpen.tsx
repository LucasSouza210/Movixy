import { useEffect, type RefObject } from "react"

const getMobileNavHeight = () => {
    const screenWidth = window.innerWidth

    if (screenWidth >= 1024) return 0
    if (screenWidth >= 768) return 80
    if (screenWidth >= 640) return 72

    return 64
}

export default function useScrollOnOpen(open: boolean, containerRef: RefObject<HTMLElement | null>) {

    useEffect(() => {
        if (!open) return

        const frame = requestAnimationFrame(() => {
            const container = containerRef.current

            if (!container) return

            const dropdown = container.lastElementChild as HTMLElement | null

            if (!dropdown || dropdown === container.firstElementChild) return

            const rect = dropdown.getBoundingClientRect()

            const headerHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 0
            const safeTop = headerHeight
            const safeBottom = window.innerHeight - getMobileNavHeight()

            if (rect.top >= safeTop && rect.bottom <= safeBottom) return

            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

            dropdown.scrollIntoView({ block: 'center', behavior: reduceMotion ? 'auto' : 'smooth' })
        })

        return () => cancelAnimationFrame(frame)
    }, [open, containerRef])
}