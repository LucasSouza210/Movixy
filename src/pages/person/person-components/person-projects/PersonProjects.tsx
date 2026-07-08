import ProjectsProvider from "../../../../contexts/ProjectsProvider"
import { useTranslate } from "../../../../translations/Translations"
import type { PersonCredit } from "../../../../types/tmdb"
import ProjectsControls from "./controls/ProjectsControls"
import ProjectsList from "./ProjectsList"

function PersonProjectsWrapper({ projects, loading }: { projects: PersonCredit[], loading: boolean }) {
    return (
        <ProjectsProvider projects={projects}>
            <PersonProjects projects={projects} loading={loading}/>
        </ProjectsProvider>
    )
}

function PersonProjects({ projects, loading }: { projects: PersonCredit[], loading: boolean }) {

    const { line } = useTranslate()

    return (
        <div className="w-full flex flex-col border rounded-4xl sm:rounded-[36px] md:rounded-[40px] lg:rounded-4xl overflow-hidden border-zinc-200 dark:border-zinc-800/80">
            <div className="w-full flex items-center justify-between border-b px-6 sm:px-7 md:px-8 lg:px-6 xl:px-7 2xl:px-8 py-5 sm:py-6 md:py-7 lg:py-4 xl:py-5 2xl:py-6 bg-white dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800/80">
                <p className="text-base sm:text-lg md:text-xl lg:text-sm 2xl:text-lg font-semibold tracking-wider 2xl:tracking-widest leading-none text-black dark:text-white">{line('personProjects')}</p>
                <ProjectsControls />
            </div>
            <div className="w-full flex p-6 sm:p-7 md:p-8 lg:p-6 xl:p-7 2xl:p-8 overflow-hidden bg-zinc-50 dark:bg-zinc-950/80">
                <ProjectsList projects={projects} loading={loading}/>
            </div>
        </div>
    )
}

export default PersonProjectsWrapper