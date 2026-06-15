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
            <div className="w-full flex flex-col gap-3">
                {
                    genres.slice(0, 3).map((i, index) => {

                        const Icon = i.icon

                        return (
                            <button className={`${projectFilters.genres.includes(i.value) ? 'text-orange-500 dark:text-orange-400' : 'text-zinc-500 dark:text-zinc-400'} flex items-center gap-2`} key={index} onClick={() => toggle(i.value)}>
                                <span className="size-4 flex items-center justify-center border rounded-sm bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                                    {
                                        projectFilters.genres.includes(i.value) &&
                                        <FaCheck className="size-1/2 fill-orange-400 dark:fill-orange-500" />
                                    }
                                </span>
                                <Icon className="size-3" />
                                <span className="text-xs font-medium tracking-wide leading-none truncate">{i.name[lang]}</span>
                            </button>
                        )
                    })
                }
                <button className="w-fit text-xs font-medium tracking-wider leading-none transition-all duration-300 cursor-pointer ease-in-out text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200" onClick={() => handleViewAll()}>{line('viewAll')}</button>
            </div>
        </FilterSection>
    )
}