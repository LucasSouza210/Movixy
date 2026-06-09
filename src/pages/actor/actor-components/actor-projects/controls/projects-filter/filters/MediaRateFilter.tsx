import { useState } from "react";
import { useTranslate } from "../../../../../../../translations/Translations";
import FilterSection from "../FilterSection";
import { FaMinus } from "react-icons/fa";
export default function MediaRateFilter() {

    const { line } = useTranslate()

    const [minRate, setMinRate] = useState("")
    const [maxRate, setMaxRate] = useState("")

    const handleMinChange = (value: string) => {
        const num = Number(value)

        if (value === "") {
            setMinRate("")
            return
        }

        if (num < 0 || num > 10) return

        setMinRate(value)

        if (maxRate && num > Number(maxRate)) {
            setMaxRate(value)
        }
    }

    const handleMaxChange = (value: string) => {
        const num = Number(value)

        if (value === "") {
            setMaxRate("")
            return
        }

        if (num < 0 || num > 10) return

        setMaxRate(value)

        if (minRate && num < Number(minRate)) {
            setMinRate(value)
        }
    }

    return (
        <FilterSection title={line('rating')}>
            <div className="w-full flex items-center gap-3">
                <input value={minRate} className="w-full h-8 text-center text-xs font-medium tracking-wide leading-none border rounded-lg outline-none bg-zinc-50 dark:bg-zinc-900 border-zinc-200 focus:border-zinc-300 dark:border-zinc-800 dark:focus:border-zinc-700 text-zinc-700 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-600" type="number" min={0} max={10} onChange={(e) => handleMinChange(e.target.value)} placeholder={line('from')} />
                <FaMinus className="size-5 fill-zinc-400 dark:fill-zinc-600" />
                <input value={maxRate} className="w-full h-8 text-center text-xs font-medium tracking-wide leading-none border rounded-lg outline-none bg-zinc-50 dark:bg-zinc-900 border-zinc-200 focus:border-zinc-300 dark:border-zinc-800 dark:focus:border-zinc-700 text-zinc-700 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-600" type="number" min={0} max={10} onChange={(e) => handleMaxChange(e.target.value)} placeholder={line('to')} />
            </div>
        </FilterSection>
    )
}