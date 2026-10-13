import { useState } from "react"

type RatingSliderProps = {
    draft: number
    onDraftChange: (value: number) => void
    onCommit: (value: number) => void
}

const MAX = 10
const ticks = Array.from({ length: MAX - 1 }, (_, i) => (i + 1) * 10)

const round = (n: number) => Math.round(n * 10) / 10

export default function RatingSlider({ draft, onDraftChange, onCommit }: RatingSliderProps) {

    const [active, setActive] = useState(false)

    const finish = (e: React.SyntheticEvent<HTMLInputElement>) => {
        setActive(false)
        onCommit(round(Number(e.currentTarget.value)))
    }

    return (
        <div className="w-full lg:w-3/5 h-8 sm:h-9 md:h-10 lg:h-8 xl:h-9 2xl:h-10 border rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-[7px] xl:rounded-lg 2xl:rounded-[9px] overflow-hidden relative bg-elevated border-default lg:bg-zinc-900/50 lg:border-zinc-700/60">
            <div className={`absolute inset-y-0 left-0 transition-[width] duration-150 ease-out motion-reduce:transition-none after:absolute after:inset-y-0 after:right-0 after:w-1 sm:after-w-1.25 md:after:w-1.5 lg:after:w-1 xl:after:w-1.25 2xl:after:w-1.5 bg-orange-500 after:bg-zinc-500 dark:after:bg-zinc-300 ${active ? 'animate-rating-bar' : ''}`} style={{ width: `${(draft / MAX) * 100}%` }} />
            {
                ticks.map((position) => {
                    const covered = position <= (draft / MAX) * 100

                    return (
                        <span key={position} aria-hidden="true" className={`w-0.75 md:w-1 lg:w-0.75 2xl:w-1 rounded-t-full rounded-b-full absolute top-1/2 h-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-150 motion-reduce:transition-none bg-zinc-200 dark:bg-zinc-800 ${covered ? 'opacity-0' : 'opacity-100'} ${active ? 'animate-rating-tick dark:animate-rating-tick-dark' : ''}`} style={{ left: `${position}%` }} />
                    )
                })
            }
            <input type="range" className="absolute inset-0 size-full m-0 appearance-none opacity-0 cursor-pointer touch-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-0 [&::-moz-range-thumb]:size-0 [&::-moz-range-thumb]:border-0" min={0} max={MAX} step={0.1} value={draft} aria-valuetext={`${draft.toFixed(1)} / ${MAX}`} onChange={(e) => onDraftChange(round(Number(e.target.value)))} onPointerDown={() => setActive(true)} onPointerUp={finish} onPointerCancel={finish} onKeyDown={() => setActive(true)} onKeyUp={finish} onBlur={() => setActive(false)} />
        </div>
    )
}