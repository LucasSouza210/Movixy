import { useContext, useMemo } from "react";
import { ProjectsContexts } from "../../../../../../contexts/ProjectsProvider";
import type { PersonCredit } from "../../../../../../types/tmdb";
import ProjectCard from "../../../../../../components/ui/cards/project-card/ProjectCard";
import NoProjects from "../no-projects/NoProjects";
import ProjectsListSkeleton from "./ProjectsListSkeleton";
import LimitedGridScroll from "../../../../../../components/ui/scrolls/MultiRowScroll";

const columnsPerView = [1, 1, 1, 2]
const rowsPerView = [3, 3, 3, 3]
const gapPerBreakpoint = [4, 5, 6, 3, 4, 5]

export default function ProjectsList({ projects, loading }: { projects: PersonCredit[], loading: boolean }) {

    const projectsContexts = useContext(ProjectsContexts)

    const { filteredProjects, sortBy } = projectsContexts!

    const list = filteredProjects ?? projects

    const getReleaseDate = (project: PersonCredit) => project.media_type === "movie" ? project.release_date : project.first_air_date

    const sortedProjects = useMemo(() => {
        return [...list].sort((a, b) => {
            switch (sortBy) {
                case "oldest": {
                    const dateA = getReleaseDate(a) ? new Date(getReleaseDate(a)!).getTime() : Infinity
                    const dateB = getReleaseDate(b) ? new Date(getReleaseDate(b)!).getTime() : Infinity
                    return dateA - dateB;
                }
                case "highest_rated":
                    return (b.vote_average ?? 0) - (a.vote_average ?? 0)
                case "lowest_rated":
                    return (a.vote_average ?? 0) - (b.vote_average ?? 0)
                default: {
                    const dateA = getReleaseDate(a) ? new Date(getReleaseDate(a)!).getTime() : -Infinity
                    const dateB = getReleaseDate(b) ? new Date(getReleaseDate(b)!).getTime() : -Infinity
                    return dateB - dateA;
                }
            }
        })
    }, [list, sortBy])
    
    return (
        <div className="w-full p-6 sm:p-7 md:p-8 lg:p-4 xl:p-5 2xl:p-6 bg-secondary">
            {
                loading ? <ProjectsListSkeleton />
                    :
                    sortedProjects.length > 0 ?
                        <LimitedGridScroll className="w-full" columnsPerView={columnsPerView} rowsPerView={rowsPerView} gapPerBreakpoint={gapPerBreakpoint}>
                            {
                                sortedProjects.map((i, index) => (
                                    <ProjectCard project={i} key={index} />
                                ))
                            }
                        </LimitedGridScroll>
                        :
                        <NoProjects />
            }
        </div>
    )
}