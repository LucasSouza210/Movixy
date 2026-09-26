import ProjectsProvider from "../../../../contexts/ProjectsProvider"
import type { PersonCredit } from "../../../../types/tmdb"
import ProjectsHeader from "./components/header/ProjectsHeader"
import ProjectsList from "./components/list/ProjectsList"

function PersonProjectsWrapper({ projects, loading }: { projects: PersonCredit[], loading: boolean }) {
    return (
        <ProjectsProvider projects={projects}>
            <PersonProjects projects={projects} loading={loading} />
        </ProjectsProvider>
    )
}

function PersonProjects({ projects, loading }: { projects: PersonCredit[], loading: boolean }) {
    return (
        <div className="w-full flex flex-col border rounded-3xl sm:rounded-[28px] md:rounded-4xl lg:rounded-[22px] xl:rounded-[26px] 2xl:rounded-[30px] overflow-hidden border-default">
            <ProjectsHeader />
            <ProjectsList projects={projects} loading={loading} />
        </div>
    )
}

export default PersonProjectsWrapper