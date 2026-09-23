import Title from "./components/Title";
import ProjectsControls from "./components/controls/ProjectsControls";

export default function ProjectsHeader() {
    return (
        <div className="w-full flex items-center justify-between border-b px-6 sm:px-7 md:px-8 lg:px-6 xl:px-7 2xl:px-8 py-5 sm:py-5.5 md:py-6 lg:py-4 xl:py-5 2xl:py-6 border-default bg-default">
            <Title />
            <ProjectsControls />
        </div>
    )
}