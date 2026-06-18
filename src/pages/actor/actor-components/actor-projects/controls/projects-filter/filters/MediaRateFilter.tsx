import { useContext } from "react";
import { ProjectsContexts } from "../../../../../../../contexts/ProjectsProvider";
import { useTranslate } from "../../../../../../../translations/Translations";
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
            <div className="w-full flex flex-col gap-2">
                <div className="w-full flex items-center gap-3 sm:gap-3.25 md:gap-3.5">
                    <input value={projectFilters.rate.min ?? ""} className="w-full h-8 md:h-10 text-center text-xs sm:text-[13px] md:text-sm font-medium tracking-wide leading-none border rounded-lg sm:rounded-[10px] md:rounded-xl outline-none bg-zinc-50 dark:bg-zinc-900 border-zinc-200 focus:border-zinc-300 dark:border-zinc-800 dark:focus:border-zinc-700 text-zinc-700 dark:text-zinc-200" type="number" min={0} max={10} placeholder={line('from')} onChange={(e) => handleMinChange(e.target.value)} />
                    <FaMinus className="size-5 sm:size-5.5 md:size-6 fill-zinc-400 dark:fill-zinc-600" />
                    <input value={projectFilters.rate.max ?? ""} className={`${projectFilters.rate.error ? 'border-red-300' : 'border-zinc-200 focus:border-zinc-300 dark:border-zinc-800 dark:focus:border-zinc-700'} w-full h-8 md:h-10 text-center text-xs sm:text-[13px] md:text-sm font-medium tracking-wide leading-none border rounded-lg sm:rounded-[10px] md:rounded-xl outline-none bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200`} type="number" min={0} max={10} placeholder={line('to')} onChange={(e) => handleMaxChange(e.target.value)} />
                </div>
                {
                    projectFilters.rate.error && <p className="text-xs font-medium tracking-wide leading-4 text-red-400">{projectFilters.rate.error}</p>
                }
            </div>
        </FilterSection>
    )
}