import { useContext } from "react"
import { ProjectsContexts } from "../../../../../../../../../contexts/ProjectsProvider"
import { useTranslate } from "../../../../../../../../../translations/Translations"
import { defaultProjectFilters } from "../../../../../../../../../utils/constants"

export default function ClearFilters() {

    const projectsContexts = useContext(ProjectsContexts)

    const { setProjectFilters, setFilteredProjects } = projectsContexts!

    const { line } = useTranslate()

    const handleClean = () => {
        setProjectFilters(defaultProjectFilters)
        setFilteredProjects(null)
    }

    return (
        <button className="text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wider transition-all duration-300 cursor-pointer ease-in-out text-zinc-700 dark:text-zinc-200 hover:text-orange-500" onClick={() => handleClean()}>
            {line('clearFilters')}
        </button>
    )
}