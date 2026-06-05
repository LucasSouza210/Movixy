import VerticalScroll from "../../../../components/ui/scrolls/VerticalScroll";
import ProjectCard from "../../../../components/ui/cards/project-card/ProjectCard";
import type { ActorCredit } from "../../../../types/tmdb";

export default function ProjectsList({ projects }: { projects: ActorCredit[] }) {

    const getReleaseDate = (project: ActorCredit) => project.media_type === "movie" ? project.release_date : project.first_air_date

    const sortedProjects = [...projects].sort((a, b) => new Date(getReleaseDate(b) ?? "1900-01-01").getTime() - new Date(getReleaseDate(a) ?? "1900-01-01").getTime())

    return (
        <VerticalScroll className="w-full h-116" itemsPerView={[3]} gapPerBreakpoint={[5]}>
            {
                sortedProjects.map((i, index) => (
                    <ProjectCard project={i} key={index} />
                ))
            }
        </VerticalScroll>
    )
}