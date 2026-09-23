import { useContext, useMemo } from "react";
import { ProjectsContexts } from "../../../../../../contexts/ProjectsProvider";
import type { PersonCredit } from "../../../../../../types/tmdb";
import VerticalScroll from "../../../../../../components/ui/scrolls/VerticalScroll";
import ProjectCard from "../../../../../../components/ui/cards/project-card/ProjectCard";
import NoProjects from "../no-projects/NoProjects";
import ProjectsListSkeleton from "./ProjectsListSkeleton";

const itemsPerView = [3, 3, 3, 2]
const gapPerBreakpoint = [4, 5, 6, 4, 5, 6]

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
        <div className="w-full h-116 sm:h-140 md:h-164 lg:h-100 xl:h-120 2xl:h-140 p-6 sm:p-7 md:p-8 lg:p-6 xl:p-7 2xl:p-8 bg-zinc-50 dark:bg-[#0c0c0e]">
            {
                loading ? <ProjectsListSkeleton />
                    :
                    sortedProjects.length > 0 ?
                        <VerticalScroll className="size-full" itemsPerView={itemsPerView} gapPerBreakpoint={gapPerBreakpoint}>
                            {
                                sortedProjects.map((i, index) => (
                                    <ProjectCard project={i} key={index} />
                                ))
                            }
                        </VerticalScroll>
                        :
                        <NoProjects />
            }
        </div>
    )
}