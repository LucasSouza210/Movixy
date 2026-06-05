type CSSVars = React.CSSProperties & {
    [key: `--${string}`]: string | number
}

export default function HorizontalScroll({ className, itemsPerView, gapPerBreakpoint, scrollBarHeight, children }: { className?: string, itemsPerView: number[], gapPerBreakpoint: number[], scrollBarHeight: number[], children: React.ReactNode }) {

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

        const cols = getValue(itemsPerView, index)
        const gap = getValue(gapPerBreakpoint, index)
        const scrollbar = getValue(scrollBarHeight, index)

        styles[`--cols-${index}`] = cols
        styles[`--gap-${index}`] = `${gap * 0.25}rem`
        styles[`--scrollbar-${index}`] = `${scrollbar * 0.25}rem`
    }

    return (
        <div className={`${className} grid grid-flow-col overflow-x-auto *:shrink-0 auto-cols-[calc((100%-((var(--cols-0)-1)*var(--gap-0)))/var(--cols-0))] gap-(--gap-0) sm:auto-cols-[calc((100%-((var(--cols-1)-1)*var(--gap-1)))/var(--cols-1))] sm:gap-(--gap-1) md:auto-cols-[calc((100%-((var(--cols-2)-1)*var(--gap-2)))/var(--cols-2))] md:gap-(--gap-2) lg:auto-cols-[calc((100%-((var(--cols-3)-1)*var(--gap-3)))/var(--cols-3))] lg:gap-(--gap-3) xl:auto-cols-[calc((100%-((var(--cols-4)-1)*var(--gap-4)))/var(--cols-4))] xl:gap-(--gap-4) 2xl:auto-cols-[calc((100%-((var(--cols-5)-1)*var(--gap-5)))/var(--cols-5))] 2xl:gap-(--gap-5) [&::-webkit-scrollbar]:h-(--scrollbar-0) sm:[&::-webkit-scrollbar]:h-(--scrollbar-1) md:[&::-webkit-scrollbar]:h-(--scrollbar-2) lg:[&::-webkit-scrollbar]:h-(--scrollbar-3) xl:[&::-webkit-scrollbar]:h-(--scrollbar-4) 2xl:[&::-webkit-scrollbar]:h-(--scrollbar-5) [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:cursor-pointer [&::-webkit-scrollbar-thumb]:bg-zinc-300 dark:[&::-webkit-scrollbar-thumb]:bg-zinc-800 [&::-webkit-scrollbar-thumb:hover]:bg-zinc-400 dark:[&::-webkit-scrollbar-thumb:hover]:bg-zinc-700`} style={styles}>
            {children}
        </div>
    )
}