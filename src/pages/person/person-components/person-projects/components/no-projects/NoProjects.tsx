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
        <div className="size-full flex flex-col items-center justify-center gap-2">
            {
                noFilteredResults ?
                    <ClearFilters />
                    :
                    <NothingToShow />
            }
        </div>
    )
}