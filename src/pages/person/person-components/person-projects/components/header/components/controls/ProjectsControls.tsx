import ProjectsFilterButton from "./projects-filter/ProjectsFilterButton";
import ProjectsOrderButton from "./projects-order/ProjectsOrderButton";

export default function ProjectsControls() {
    return (
        <div className="flex items-center gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-2 xl:gap-2.75 2xl:gap-3">
            <ProjectsOrderButton />
            <ProjectsFilterButton />
        </div>
    )
}