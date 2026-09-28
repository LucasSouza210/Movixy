import { useContext } from "react"
import { ProjectsContexts } from "../../../../../contexts/ProjectsProvider"
import { useTranslate } from "../../../../../translations/Translations"
import { defaultProjectFilters } from "../../../../../utils/constants"

export default function CleanFilters() {

    const projectsContexts = useContext(ProjectsContexts)

    const { setProjectFilters, setFilteredProjects } = projectsContexts!

    const { line } = useTranslate()

    const handleClean = () => {
        setProjectFilters(defaultProjectFilters)
        setFilteredProjects(null)
    }

    return (
        <button className="w-fit text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider text-action" onClick={() => handleClean()}>
            {
                line('clearFilters')
            }
        </button>
    )
}