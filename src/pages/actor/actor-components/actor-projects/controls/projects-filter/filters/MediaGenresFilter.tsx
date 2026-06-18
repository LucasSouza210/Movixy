import { useContext } from "react"
import { Contexts } from "../../../../../../../contexts/ContextsProvider"
import { ProjectsContexts } from "../../../../../../../contexts/ProjectsProvider"
import useDrawer from "../../../../../../../hooks/useDrawer"
import { useTranslate } from "../../../../../../../translations/Translations"
import { applyProjectFilters } from "../../../../../../../utils/tmdb/applyProjectFilters"
import useFormattedRate from "../../../../../../../hooks/useFormattedRate"
import { genres } from "../../../../../../../utils/constants"
import FilterSection from "../FilterSection"
import GenresDrawer from "../../../../../../../components/ui/drawers/genres-drawer/GenresDrawer"
import { FaCheck } from "react-icons/fa";

export default function MediaGenresFilter({ close }: { close: () => void }) {

    const contexts = useContext(Contexts)

    const { lang } = contexts!

    const projectsContexts = useContext(ProjectsContexts)

    const { projects, projectFilters, setProjectFilters, setFilteredProjects } = projectsContexts!

    const { openDrawer } = useDrawer()

    const { line } = useTranslate()

    const formatRate = useFormattedRate

    const apply = (genres: number[]) => {
        const nextFilters = {
            ...projectFilters,
            genres
        }

        setProjectFilters(nextFilters)

        const list = applyProjectFilters(
            projects,
            nextFilters,
            formatRate
        )

        setFilteredProjects(list)
    }

    const toggle = (value: number) => {
        setProjectFilters(prev => ({ ...prev, genres: prev.genres.includes(value) ? prev.genres.filter(i => i !== value) : [...prev.genres, value] }))
    }

    const handleViewAll = () => {
        close()
        openDrawer(<GenresDrawer list={genres} initialGenres={projectFilters.genres} onConfirm={(genres) => apply(genres)} />)
    }

    return (
        <FilterSection title={line('genres')}>
            <div className="w-full flex flex-col gap-2.5 sm:gap-3 md:gap-3.5">
                {
                    genres.slice(0, 3).map((i, index) => {

                        const Icon = i.icon

                        return (
                            <button className={`${projectFilters.genres.includes(i.value) ? 'text-orange-500 dark:text-orange-400' : 'text-zinc-500 dark:text-zinc-400'} flex items-center gap-2 sm:gap-2.25 md:gap-2.5 `} key={index} onClick={() => toggle(i.value)}>
                                <span className="size-4 sm:size-4.5 md:size-5 flex items-center justify-center border rounded-sm bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                                    {
                                        projectFilters.genres.includes(i.value) &&
                                        <FaCheck className="size-1/2 fill-orange-400 dark:fill-orange-500" />
                                    }
                                </span>
                                <div className="flex items-center gap-1.5 sm:gap-1.75 md:gap-2">
                                    <Icon className="size-3 sm:size-3.25 md:size-3.5" />
                                    <span className="text-xs sm:text-[13px] md:text-sm font-medium tracking-wide md:tracking-wider leading-none truncate">{i.name[lang]}</span>
                                </div>
                            </button>
                        )
                    })
                }
                <button className="w-fit text-xs sm:text-sm md:text-base font-medium tracking-wider leading-none transition-all duration-300 cursor-pointer ease-in-out text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200" onClick={() => handleViewAll()}>{line('viewAll')}</button>
            </div>
        </FilterSection>
    )
}