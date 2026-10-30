import { useContext } from "react";
import { MediaListContexts } from "../../../../../../../contexts/MediaListProvider";
import { useTranslate } from "../../../../../../../translations/Translations";
import { FaMinus } from "react-icons/fa";
import FilterSection from "../../ui/filter-section/FilterSection";

export default function Rate() {

    const { listFilters, setListFilters } = useContext(MediaListContexts)!

    const { line } = useTranslate()

    const validate = (min: number | null, max: number | null) => {
        if (min !== null && max !== null && max < min) {
            return true
        }
        return false
    }

    const handleMinChange = (value: string) => {
        const num = Number(value)

        if (value === "") {
            setListFilters(prev => ({
                ...prev,
                rate: {
                    ...prev.rate,
                    min: null,
                    error: validate(null, prev.rate.max)
                }
            }))
            return
        }

        if (num < 0 || num > 10) return

        setListFilters(prev => ({
            ...prev,
            rate: {
                ...prev.rate,
                min: num,
                error: validate(num, prev.rate.max)
            }
        }))
    }

    const handleMaxChange = (value: string) => {
        const num = Number(value)

        if (value === "") {
            setListFilters(prev => ({
                ...prev,
                rate: {
                    ...prev.rate,
                    max: null,
                    error: validate(prev.rate.min, null)
                }
            }))
            return
        }

        if (num < 0 || num > 10) return

        setListFilters(prev => ({
            ...prev,
            rate: {
                ...prev.rate,
                max: num,
                error: validate(prev.rate.min, num)
            }
        }))
    }

    return (
        <FilterSection title={line('rating')}>
            <div className="w-full flex items-center gap-3 sm:gap-3.25 md:gap-3.5 lg:gap-2.5 xl:gap-2.75 2xl:gap-3">
                <input value={listFilters.rate.min ?? ""} className="w-full h-8 sm:h-9 md:h-10 lg:h-7 xl:h-8 2xl:h-9 text-center text-xs sm:text-[13px] md:text-sm lg:text-[10px] xl:text-[11px] 2xl:text-xs font-medium tracking-wide border rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-[7px] xl:rounded-lg 2xl:rounded-[9px] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-elevated border-zinc-200 focus:border-zinc-300 dark:border-zinc-800 dark:focus:border-zinc-700 text-default" type="number" min={0} max={10} placeholder={line('from')} onChange={(e) => handleMinChange(e.target.value)} />
                <FaMinus className="size-5 sm:size-5.5 md:size-6 lg:size-4.5 xl:size-5 2xl:size-5.5 fill-zinc-400 dark:fill-zinc-600" />
                <input value={listFilters.rate.max ?? ""} className={`w-full h-8 sm:h-9 md:h-10 lg:h-7 xl:h-8 2xl:h-9 text-center text-xs sm:text-[13px] md:text-sm lg:text-[10px] xl:text-[11px] 2xl:text-xs font-medium tracking-wide border rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-[7px] xl:rounded-lg 2xl:rounded-[9px] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-elevated text-default ${listFilters.rate.error ? 'border-red-500' : 'border-zinc-200 focus:border-zinc-300 dark:border-zinc-800 dark:focus:border-zinc-700'}`} type="number" min={0} max={10} placeholder={line('to')} onChange={(e) => handleMaxChange(e.target.value)} />
            </div>
        </FilterSection>
    )
}