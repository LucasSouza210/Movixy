import { useContext } from "react"
import { ProjectsContexts } from "../../../../contexts/ProjectsProvider"
import { useTranslate } from "../../../../translations/Translations"
import { defaultProjectFilters } from "../../../../utils/constants"

export default function NoProjects() {

    const projectsContexts = useContext(ProjectsContexts)

    const { setProjectFilters, setFilteredProjects } = projectsContexts!

    const { line } = useTranslate()

    const handleClean = () => {
        setProjectFilters(defaultProjectFilters)
        setFilteredProjects(null)
    }

    return (
        <div className="size-full flex flex-col items-center justify-center gap-2">
            <p className="max-w-9/10 text-sm font-medium tracking-wider leading-5 text-center text-zinc-500 dark:text-zinc-400">{line('noProjectsFound')}</p>
            <button className="text-base font-medium tracking-wide leading-none transition-all duration-300 cursor-pointer ease-in-out text-zinc-700 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-white" onClick={() => handleClean()}>
                {line('clearFilters')}
            </button>
        </div>
    )
}