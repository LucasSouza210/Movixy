import { useContext } from "react"
import { ProjectsContexts } from "../../../../../../../contexts/ProjectsProvider"
import { applyProjectFilters } from "../../../../../../../utils/tmdb/applyProjectFilters"
import { BsCheckLg } from "react-icons/bs";
import formatRate from "../../../../../../../utils/tmdb/formatRate"


export default function ApplyFilters({ close }: { close: () => void }) {

    const projectsContexts = useContext(ProjectsContexts)

    const { projects, setFilteredProjects, projectFilters, setProjectFilters } = projectsContexts!

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
                    error: false
                }
            }))
            return
        }
        setProjectFilters(prev => ({
            ...prev,
            rate: {
                ...prev.rate,
                error: false
            }
        }))

        const list = applyProjectFilters(projects, projectFilters, formatRate)

        setFilteredProjects(list)
        close()
    }

    return (
        <button className="size-8 sm:size-9 md:size-10 lg:size-7 xl:size-8 2xl:size-9 flex items-center justify-center rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg action-brand" onClick={() => applyFilters()}>
            <BsCheckLg className="size-3/5 fill-zinc-100 group-hover:fill-white" />
        </button>
    )
}