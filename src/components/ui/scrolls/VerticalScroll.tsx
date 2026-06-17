import { OverlayScrollbarsComponent } from "overlayscrollbars-react"

type CSSVars = React.CSSProperties & {
    [key: `--${string}`]: string | number
}

export default function VerticalScroll({ className, itemsPerView, gapPerBreakpoint, children }: { className?: string, itemsPerView: number[], gapPerBreakpoint: number[], children: React.ReactNode }) {

    const getValue = (values: number[], index: number) => {
        switch (index) {
            case 0:
                return values[0]

            case 1:
                return values[1] ?? values[0]

            case 2:
                return values[2] ?? values[1] ?? values[0]

            case 3:
                return values[3] ?? values[2] ?? values[1] ?? values[0]

            case 4:
                return values[4] ?? values[3] ?? values[2] ?? values[1] ?? values[0]

            default:
                return values[values.length - 1]
        }
    }

    const styles: CSSVars = {}

    for (let index = 0; index < 6; index++) {

        const rows = getValue(itemsPerView, index)
        const gap = getValue(gapPerBreakpoint, index)

        styles[`--rows-${index}`] = rows
        styles[`--gap-${index}`] = `${gap * 0.25}rem`
    }

    return (
        <OverlayScrollbarsComponent defer className={`size-full ${className ?? ""}`}>
            <div className={`size-full grid grid-flow-row *:shrink-0 relative auto-rows-[calc((100%-((var(--rows-0)-1)*var(--gap-0)))/var(--rows-0))] gap-(--gap-0) sm:auto-rows-[calc((100%-((var(--rows-1)-1)*var(--gap-1)))/var(--rows-1))] sm:gap-(--gap-1) md:auto-rows-[calc((100%-((var(--rows-2)-1)*var(--gap-2)))/var(--rows-2))] md:gap-(--gap-2) lg:auto-rows-[calc((100%-((var(--rows-3)-1)*var(--gap-3)))/var(--rows-3))] lg:gap-(--gap-3) xl:auto-rows-[calc((100%-((var(--rows-4)-1)*var(--gap-4)))/var(--rows-4))] xl:gap-(--gap-4) 2xl:auto-rows-[calc((100%-((var(--rows-5)-1)*var(--gap-5)))/var(--rows-5))] 2xl:gap-(--gap-5)`} style={styles}>
                {children}
            </div>
        </OverlayScrollbarsComponent>
    )
}