import { useContext } from "react"
import { ProjectsContexts } from "../../../../../../../contexts/ProjectsProvider"
import { useTranslate } from "../../../../../../../translations/Translations"
import { defaultProjectFilters } from "../../../../../../../utils/constants"
import { LuSearchX } from "react-icons/lu"

export default function ClearFilters() {

    const projectsContexts = useContext(ProjectsContexts)

    const { setProjectFilters, setFilteredProjects } = projectsContexts!

    const { line } = useTranslate()

    const handleClean = () => {
        setProjectFilters(defaultProjectFilters)
        setFilteredProjects(null)
    }


    return (
        <div className="flex flex-col items-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-3.5 2xl:gap-4">
            <LuSearchX className="size-12 sm:size-14 md:size-16 lg:size-12 xl:size-14 2xl:size-16 text-zinc-500 dark:text-zinc-300" />
            <div className="flex flex-col items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2.5 2xl:gap-3">
                <p className="max-w-9/10 text-sm sm:text-base md:text-lg lg:text-sm xl:text-base 2xl:text-lg font-medium tracking-wider leading-5 sm:leading-5.75 md:leading-6.5 lg:leading-5 2xl:leading-6.5 text-center text-zinc-500 dark:text-zinc-400">{line('noProjectsFound')}</p>
                <button className="text-sm sm:text-base md:text-lg lg:text-sm xl:text-base 2xl:text-lg font-medium tracking-wider leading-none transition-all duration-300 cursor-pointer ease-in-out text-zinc-700 dark:text-zinc-200 hover:text-orange-500" onClick={() => handleClean()}>
                    {line('clearFilters')}
                </button>
            </div>
        </div>
    )
}