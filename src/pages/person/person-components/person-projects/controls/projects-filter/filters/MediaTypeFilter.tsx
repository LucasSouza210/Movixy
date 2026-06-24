import { useContext } from "react"
import { ProjectsContexts } from "../../../../../../../contexts/ProjectsProvider"
import { useTranslate } from "../../../../../../../translations/Translations"
import { mediaTypes } from "../../../../../../../utils/constants"
import FilterSection from "../FilterSection"
import { FaCheck } from "react-icons/fa"

export default function MediaTypeFilter() {

    const projectsContexts = useContext(ProjectsContexts)

    const { projectFilters, setProjectFilters } = projectsContexts!

    const { line } = useTranslate()

    const changeType = (type: string) => {
        setProjectFilters(prev => ({
            ...prev,
            type
        }))
    }

    return (
        <FilterSection title={line('mediaType')}>
            <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-2 xl:gap-2.5 2xl:gap-3">
                {
                    mediaTypes.map((i, index) => {
                        const Icon = i.icon
                        return (
                            <button className={`${projectFilters.type == i.value ? 'text-orange-500 dark:text-orange-400' : 'text-zinc-500 dark:text-zinc-400'} flex items-center gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-1.5 xl:gap-1.75 2xl:gap-2`} key={index} onClick={() => changeType(i.value)}>
                                <span className="size-4 sm:size-4.5 md:size-5 lg:size-3.5 xl:size-4.25 2xl:size-5 flex items-center justify-center border rounded-sm sm:rounded-[5px] md:rounded-md lg:rounded-sm xl:rounded-[5px] 2xl:rounded-md bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                                    {
                                        projectFilters.type == i.value &&
                                        <FaCheck className="size-1/2 fill-orange-400 dark:fill-orange-500" />
                                    }
                                </span>
                                <div className="flex items-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1 xl:gap-1.25 2xl:gap-1.5">
                                    <Icon className="size-3 sm:size-3.25 md:size-3.5 lg:size-2.5 xl:size-3 2xl:size-3.5" />
                                    <span className="text-xs sm:text-[13px] md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wide md:tracking-wider lg:tracking-wide 2xl:tracking-wider leading-none truncate">{line(i.title)}</span>
                                </div>
                            </button>
                        )
                    })
                }
            </div>
        </FilterSection>
    )
}