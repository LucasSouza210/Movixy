type CSSVars = React.CSSProperties & {
    [key: `--${string}`]: string | number
}

export default function VerticalScroll({ className, itemsPerView, gapPerBreakpoint, scrollBarWeight, children }: { className?: string, itemsPerView: number[], gapPerBreakpoint: number[], scrollBarWeight: number[], children: React.ReactNode }) {

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
        const scrollbar = getValue(scrollBarWeight, index)

        styles[`--rows-${index}`] = rows
        styles[`--gap-${index}`] = `${gap * 0.25}rem`
        styles[`--scrollbar-${index}`] = `${scrollbar * 0.25}rem`
    }

    return (
        <div className={`${className} grid grid-flow-row overflow-y-auto *:shrink-0 auto-rows-[calc((100%-((var(--rows-0)-1)*var(--gap-0)))/var(--rows-0))] gap-(--gap-0) sm:auto-rows-[calc((100%-((var(--rows-1)-1)*var(--gap-1)))/var(--rows-1))] sm:gap-(--gap-1) md:auto-rows-[calc((100%-((var(--rows-2)-1)*var(--gap-2)))/var(--rows-2))] md:gap-(--gap-2) lg:auto-rows-[calc((100%-((var(--rows-3)-1)*var(--gap-3)))/var(--rows-3))] lg:gap-(--gap-3) xl:auto-rows-[calc((100%-((var(--rows-4)-1)*var(--gap-4)))/var(--rows-4))] xl:gap-(--gap-4) 2xl:auto-rows-[calc((100%-((var(--rows-5)-1)*var(--gap-5)))/var(--rows-5))] 2xl:gap-(--gap-5) [&::-webkit-scrollbar]:w-(--scrollbar-0) sm:[&::-webkit-scrollbar]:w-(--scrollbar-1) md:[&::-webkit-scrollbar]:w-(--scrollbar-2) lg:[&::-webkit-scrollbar]:w-(--scrollbar-3) xl:[&::-webkit-scrollbar]:w-(--scrollbar-4) 2xl:[&::-webkit-scrollbar]:w-(--scrollbar-5) [&::-webkit-scrollbar-thumb]:min-h-12 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:cursor-pointer [&::-webkit-scrollbar-thumb]:bg-zinc-300 dark:[&::-webkit-scrollbar-thumb]:bg-zinc-800 [&::-webkit-scrollbar-thumb:hover]:bg-zinc-400 dark:[&::-webkit-scrollbar-thumb:hover]:bg-zinc-700`} style={styles}>
            {children}
        </div>
    )
}