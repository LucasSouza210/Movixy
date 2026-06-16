import ProjectsFilterButton from "./projects-filter/ProjectsFilterButton";
import ProjectsOrderButton from "./projects-order/ProjectsOrderButton";

export default function ProjectsControls() {
    return (
        <div className="flex items-center gap-2">
            <ProjectsOrderButton />
            <ProjectsFilterButton />
        </div>
    )
}