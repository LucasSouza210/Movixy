import VerticalScroll from "../../../../components/ui/scrolls/VerticalScroll";
import ProjectCard from "../../../../components/ui/cards/project-card/ProjectCard";
import type { ActorCredit } from "../../../../types/tmdb";

export default function ProjectsList({ projects }: { projects: ActorCredit[] }) {
    return (
        <VerticalScroll className="w-full h-120 pr-2" itemsPerView={[3]} gapPerBreakpoint={[5]} scrollBarWeight={[2]}>
            {
                projects.map((i, index) => (
                    <ProjectCard project={i} key={index} />
                ))
            }
        </VerticalScroll>
    )
}