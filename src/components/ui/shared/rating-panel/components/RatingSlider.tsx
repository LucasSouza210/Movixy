import { useRef, useState, type ChangeEvent, type KeyboardEvent, type SyntheticEvent } from "react"

type RatingSliderProps = {
    draft: number
    onDraftChange: (value: number) => void
    onCommit: (value: number) => void
    onBegin: () => boolean
    className?: string
}

const MAX = 10
const ticks = Array.from({ length: MAX - 1 }, (_, i) => (i + 1) * 10)

const adjustKeys = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "PageUp", "PageDown"])

const trackClassName = "w-full h-8 sm:h-9 md:h-10 lg:h-8 xl:h-9 2xl:h-10 border rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-[7px] xl:rounded-lg 2xl:rounded-[9px] overflow-hidden relative bg-elevated border-default"

const fillClassName = "absolute inset-y-0 left-0 transition-[width] duration-150 ease-out motion-reduce:transition-none after:absolute after:inset-y-0 after:right-0 after:w-1 sm:after:w-1.25 md:after:w-1.5 lg:after:w-1 xl:after:w-1.25 2xl:after:w-1.5 bg-orange-500 after:bg-zinc-500 dark:after:bg-zinc-300"

const tickClassName = "w-0.75 md:w-1 lg:w-0.75 2xl:w-1 rounded-t-full rounded-b-full absolute top-1/2 h-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-150 motion-reduce:transition-none bg-zinc-200 dark:bg-zinc-800"

const inputClassName = "absolute inset-0 size-full m-0 appearance-none opacity-0 cursor-pointer touch-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-0 [&::-moz-range-thumb]:size-0 [&::-moz-range-thumb]:border-0"

const round = (n: number) => Math.round(n * 10) / 10

const isAdjustKey = (e: KeyboardEvent<HTMLInputElement>) => adjustKeys.has(e.key)

export default function RatingSlider({ draft, onDraftChange, onCommit, onBegin, className }: RatingSliderProps) {

    const [active, setActive] = useState(false)

    const isBlocked = useRef(false)

    const percent = (draft / MAX) * 100

    const begin = () => {
        if (active || isBlocked.current) return

        if (!onBegin()) {
            isBlocked.current = true
            return
        }

        setActive(true)
    }

    const finish = (e: SyntheticEvent<HTMLInputElement>) => {
        if (isBlocked.current) {
            isBlocked.current = false
            return
        }

        setActive(false)
        onCommit(round(Number(e.currentTarget.value)))
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (isBlocked.current) return

        onDraftChange(round(Number(e.target.value)))
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (isAdjustKey(e)) begin()
    }

    const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
        if (isAdjustKey(e)) finish(e)
    }

    const handleBlur = () => {
        isBlocked.current = false
        setActive(false)
    }

    return (
        <div className={`${trackClassName} ${className ?? ''}`}>
            <div className={`${fillClassName} ${active ? 'animate-rating-bar' : ''}`} style={{ width: `${percent}%` }} />
            {
                ticks.map((position) => {
                    const covered = position <= percent

                    return (
                        <span key={position} aria-hidden="true" className={`${tickClassName} ${covered ? 'opacity-0' : 'opacity-100'} ${active ? 'animate-rating-tick dark:animate-rating-tick-dark' : ''}`} style={{ left: `${position}%` }} />
                    )
                })
            }
            <input type="range" className={inputClassName} min={0} max={MAX} step={0.1} value={draft} aria-valuetext={`${draft.toFixed(1)} / ${MAX}`} onChange={handleChange} onPointerDown={begin} onPointerUp={finish} onPointerCancel={finish} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} onBlur={handleBlur} />
        </div>
    )
}