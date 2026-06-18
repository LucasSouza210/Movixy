import ProjectsProvider from "../../../../contexts/ProjectsProvider"
import { useTranslate } from "../../../../translations/Translations"
import type { ActorCredit } from "../../../../types/tmdb"
import ProjectsControls from "./controls/ProjectsControls"
import ProjectsList from "./ProjectsList"

function ActorProjectsWrapper({ projects }: { projects: ActorCredit[] }) {
    return (
        <ProjectsProvider projects={projects}>
            <ActorProjects projects={projects} />
        </ProjectsProvider>
    )
}

function ActorProjects({ projects }: { projects: ActorCredit[] }) {

    const { line } = useTranslate()

    return (
        <div className="w-full flex flex-col border rounded-4xl md:rounded-[40px] overflow-hidden border-zinc-200 dark:border-zinc-800/80">
            <div className="w-full flex items-center justify-between border-b px-6 md:px-8 py-5 md:py-7 bg-white dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800/80">
                <p className="text-base sm:text-lg md:text-xl font-semibold tracking-wider leading-none text-black dark:text-white">{line('actorProjects')}</p>
                <ProjectsControls />
            </div>
            <div className="w-full flex p-6 sm:p-7 md:p-8 overflow-hidden bg-zinc-50 dark:bg-zinc-950/80">
                <ProjectsList projects={projects} />
            </div>
        </div>
    )
}

export default ActorProjectsWrapper