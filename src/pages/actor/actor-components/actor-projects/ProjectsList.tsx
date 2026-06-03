import ProjectCard from "../../../../components/ui/cards/project-card/ProjectCard";
import type { ActorCredit } from "../../../../types/tmdb";

export default function ProjectsList({ projects }: { projects: ActorCredit[] }) {
    return (
        <div className="w-full h-95 flex flex-col gap-5 overflow-y-auto">
            {
                projects.map((i, index) => (
                    <ProjectCard project={i} key={index} />
                ))
            }
        </div>
    )
}