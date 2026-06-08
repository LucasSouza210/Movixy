import { useContext } from "react"
import ProjectsProvider, { ProjectsContexts } from "../../../../contexts/ProjectsProvider"
import { useTranslate } from "../../../../translations/Translations"
import type { ActorCredit } from "../../../../types/tmdb"
import ProjectsControls from "./controls/ProjectsControls"
import ProjectsList from "./ProjectsList"

function ActorProjectsWrapper({ projects }: { projects: ActorCredit[] }) {
    return (
        <ProjectsProvider>
            <ActorProjects projects={projects} />
        </ProjectsProvider>
    )
}

function ActorProjects({ projects }: { projects: ActorCredit[] }) {

    const projectsContexts = useContext(ProjectsContexts)

    const { filteredProjects } = projectsContexts!

    const { line } = useTranslate()

    return (
        <div className="w-full flex flex-col border rounded-4xl overflow-hidden border-zinc-200 dark:border-zinc-800/80">
            <div className="w-full flex items-center justify-between border-b px-6 py-5 bg-white dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800/80">
                <p className="text-base font-semibold tracking-wider leading-none text-black dark:text-white">{line('actorProjects')}</p>
                <ProjectsControls />
            </div>
            <div className="w-full flex p-6 overflow-hidden bg-zinc-50 dark:bg-zinc-950/80">
                {
                    !filteredProjects &&
                    <ProjectsList projects={projects} />
                }
            </div>
        </div>
    )
}

export default ActorProjectsWrapper