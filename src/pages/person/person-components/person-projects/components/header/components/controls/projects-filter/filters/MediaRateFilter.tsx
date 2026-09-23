import { useContext } from "react";
import { ProjectsContexts } from "../../../../../../../../../../contexts/ProjectsProvider";
import { useTranslate } from "../../../../../../../../../../translations/Translations";
import FilterSection from "../FilterSection";
import { FaMinus } from "react-icons/fa";

export default function MediaRateFilter() {

    const projectsContexts = useContext(ProjectsContexts)

    const { projectFilters, setProjectFilters } = projectsContexts!

    const { line } = useTranslate()

    const handleMinChange = (value: string) => {
        const num = Number(value)

        if (value === "") {
            setProjectFilters(prev => ({
                ...prev,
                rate: {
                    ...prev.rate,
                    min: null
                }
            }))
            return
        }

        if (num < 0 || num > 10) return

        setProjectFilters(prev => ({
            ...prev,
            rate: {
                ...prev.rate,
                min: num
            }
        }))
    }

    const handleMaxChange = (value: string) => {
        const num = Number(value)

        if (value === "") {
            setProjectFilters(prev => ({
                ...prev,
                rate: {
                    ...prev.rate,
                    max: null
                }
            }))
            return
        }

        if (num < 0 || num > 10) return

        setProjectFilters(prev => ({
            ...prev,
            rate: {
                ...prev.rate,
                max: num
            }
        }))
    }

    return (
        <FilterSection title={line('rating')}>
            <div className="w-full flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2.5 2xl:gap-3">
                <div className="w-full flex items-center gap-3 sm:gap-3.25 md:gap-3.5 lg:gap-2.5 xl:gap-2.75 2xl:gap-3">
                    <input value={projectFilters.rate.min ?? ""} className="w-full h-8 sm:h-9 md:h-10 lg:h-8 xl:h-9 2xl:h-10 text-center text-xs sm:text-[13px] md:text-sm lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wide leading-none border rounded-lg sm:rounded-[10px] md:rounded-xl lg:rounded-[10px] xl:rounded-[11px] 2xl:rounded-xl outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-zinc-50 dark:bg-zinc-900 border-zinc-200 focus:border-zinc-300 dark:border-zinc-800 dark:focus:border-zinc-700 text-zinc-700 dark:text-zinc-200" type="number" min={0} max={10} placeholder={line('from')} onChange={(e) => handleMinChange(e.target.value)} />
                    <FaMinus className="size-5 sm:size-5.5 md:size-6 lg:size-4.5 xl:size-5 2xl:size-5.5 fill-zinc-400 dark:fill-zinc-600" />
                    <input value={projectFilters.rate.max ?? ""} className={`${projectFilters.rate.error ? 'border-red-300' : 'border-zinc-200 focus:border-zinc-300 dark:border-zinc-800 dark:focus:border-zinc-700'} w-full h-8 sm:h-9 md:h-10 lg:h-8 xl:h-9 2xl:h-10 text-center text-xs sm:text-[13px] md:text-sm lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wide leading-none border rounded-lg sm:rounded-[10px] md:rounded-xl lg:rounded-[10px] xl:rounded-[11px] 2xl:rounded-xl outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200`} type="number" min={0} max={10} placeholder={line('to')} onChange={(e) => handleMaxChange(e.target.value)} />
                </div>
                {
                    projectFilters.rate.error && <p className="text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wide leading-4 sm:leading-4.75 md:leading-5.5 lg:leading-4 xl:leading-4.75 2xl:leading-5.5 text-red-400">{projectFilters.rate.error}</p>
                }
            </div>
        </FilterSection>
    )
}