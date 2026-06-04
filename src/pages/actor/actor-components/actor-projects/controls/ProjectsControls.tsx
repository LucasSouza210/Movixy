import ProjectsFilterButton from "./ProjectsFilterButton";
import ProjectsOrderButton from "./ProjectsOrderButton";

export default function ProjectsControls() {
    return (
        <div className="flex items-center gap-2">
            <ProjectsOrderButton />
            <ProjectsFilterButton />
        </div>
    )
}