import { useContext } from "react"
import { ProjectsContexts } from "../../../../../../contexts/ProjectsProvider"
import NoResults from "./components/no-results/NoResults"
import NothingToShow from "./components/NothingToShow"
import ListLayout from "./components/list-layout/ListLayout"

export default function NoProjects() {

    const projectsContexts = useContext(ProjectsContexts)

    const { projectFilters, filteredProjects } = projectsContexts!

    const hasActiveFilters = projectFilters.type !== "all" || projectFilters.genres.length > 0 || projectFilters.rate.min !== null || projectFilters.rate.max !== null

    const noFilteredResults = hasActiveFilters && filteredProjects?.length === 0

    return (
        <div className="w-full flex flex-col items-center justify-center gap-2 relative">
            <div className="size-full flex items-center justify-center absolute z-10">
                {
                    noFilteredResults ?
                        <NoResults />
                        :
                        <NothingToShow />
                }
            </div>
            <ListLayout />
        </div>
    )
}