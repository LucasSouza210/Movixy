import { useContext, useMemo } from "react";
import { ProjectsContexts } from "../../../../contexts/ProjectsProvider";
import type { PersonCredit } from "../../../../types/tmdb";
import VerticalScroll from "../../../../components/ui/scrolls/VerticalScroll";
import ProjectCard from "../../../../components/ui/cards/project-card/ProjectCard";
import NoProjects from "./NoProjects";

const itemsPerView = [3, 3, 3, 3, 3, 3]
const gapPerBreakpoint = [4, 5, 6, 5, 6, 7]

export default function ProjectsList({ projects }: { projects: PersonCredit[] }) {

    const projectsContexts = useContext(ProjectsContexts)

    const { filteredProjects, sortBy } = projectsContexts!

    const list = filteredProjects ?? projects

    const getReleaseDate = (project: PersonCredit) => project.media_type === "movie" ? project.release_date : project.first_air_date

    const sortedProjects = useMemo(() => {
        return [...list].sort((a, b) => {
            switch (sortBy) {
                case "oldest": {
                    const dateA = getReleaseDate(a) ? new Date(getReleaseDate(a)!).getTime() : Infinity;
                    const dateB = getReleaseDate(b) ? new Date(getReleaseDate(b)!).getTime() : Infinity;
                    return dateA - dateB;
                }
                case "highest_rated":
                    return (b.vote_average ?? 0) - (a.vote_average ?? 0);
                case "lowest_rated":
                    return (a.vote_average ?? 0) - (b.vote_average ?? 0);
                default: {
                    const dateA = getReleaseDate(a) ? new Date(getReleaseDate(a)!).getTime() : -Infinity;
                    const dateB = getReleaseDate(b) ? new Date(getReleaseDate(b)!).getTime() : -Infinity;
                    return dateB - dateA;
                }
            }
        });
    }, [list, sortBy])

    return (
        <div className="w-full h-116 sm:h-136 md:h-156 lg:h-126 xl:h-141 2xl:h-156">
            {
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