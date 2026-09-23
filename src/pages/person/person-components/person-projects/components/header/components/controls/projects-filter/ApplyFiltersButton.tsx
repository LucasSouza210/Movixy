import { useContext } from "react";
import { ProjectsContexts } from "../../../../../../../../../contexts/ProjectsProvider";
import { useTranslate } from "../../../../../../../../../translations/Translations";
import formatRate from "../../../../../../../../../utils/tmdb/formatRate";
import { BsCheckLg } from "react-icons/bs";
import { applyProjectFilters } from "../../../../../../../../../utils/tmdb/applyProjectFilters";

export default function ApplyFiltersButton({ close }: { close: () => void }) {

    const projectsContexts = useContext(ProjectsContexts)

    const { projects, setFilteredProjects, projectFilters, setProjectFilters } = projectsContexts!

    const { line } = useTranslate()


    const applyFilters = () => {

        if (projectFilters.type === "all" && projectFilters.genres.length === 0 && projectFilters.rate.min === null && projectFilters.rate.max === null) {
            setFilteredProjects(null)
            close()
            return
        }

        if (projectFilters.rate.max !== null && projectFilters.rate.min !== null && projectFilters.rate.max < projectFilters.rate.min) {
            setProjectFilters(prev => ({
                ...prev,
                rate: {
                    ...prev.rate,
                    error: line('rateError')
                }
            }))
            return
        }
        setProjectFilters(prev => ({
            ...prev,
            rate: {
                ...prev.rate,
                error: null
            }
        }))

        const list = applyProjectFilters(projects, projectFilters, formatRate)

        setFilteredProjects(list)
        close()
    }

    return (
        <button className="size-8 sm:size-9 md:size-10 lg:size-8 xl:size-9 2xl:size-10 flex items-center justify-center rounded-[10px] sm:rounded-xl md:rounded-[14px] lg:rounded-[10px] xl:rounded-[11px] 2xl:rounded-xl transition-all duration-200 cursor-pointer ease-in-out bg-orange-400 hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-400" onClick={() => applyFilters()}>
            <BsCheckLg className="size-1/2 fill-zinc-100 group-hover:fill-white" />
        </button>
    )
}