import { useContext } from "react"
import { ProjectsContexts } from "../../../../../../contexts/ProjectsProvider"
import ClearFilters from "./components/ClearFilters"
import NothingToShow from "./components/NothingToShow"

export default function NoProjects() {

    const projectsContexts = useContext(ProjectsContexts)

    const { projectFilters, filteredProjects } = projectsContexts!


    const hasActiveFilters = projectFilters.type !== "all" || projectFilters.genres.length > 0 || projectFilters.rate.min !== null || projectFilters.rate.max !== null

    const noFilteredResults = hasActiveFilters && filteredProjects?.length === 0

    return (
        <div className="w-full h-116 sm:h-140 md:h-164 lg:h-100 xl:h-120 2xl:h-140 flex flex-col items-center justify-center gap-2">
            {
                noFilteredResults ?
                    <ClearFilters />
                    :
                    <NothingToShow />
            }
        </div>
    )
}