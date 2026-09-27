import { useContext } from "react"
import { ProjectsContexts } from "../../../../../../contexts/ProjectsProvider"
import { useTranslate } from "../../../../../../translations/Translations"
import { applyProjectFilters } from "../../../../../../utils/tmdb/applyProjectFilters"
import { genres } from "../../../../../../utils/constants"
import { FaCheck } from "react-icons/fa"
import formatRate from "../../../../../../utils/tmdb/formatRate"
import useLang from "../../../../../../hooks/useLang"
import useDrawer from "../../../../../../hooks/useDrawer"
import GenresDrawer from "../../../../drawers/genres-drawer/GenresDrawer"
import FilterSection from "../ui/filter-section/FilterSection"
import Option from "../ui/option/Option"

export default function MediaGenresFilter({ close }: { close: () => void }) {

    const lang = useLang()

    const projectsContexts = useContext(ProjectsContexts)

    const { projects, projectFilters, setProjectFilters, setFilteredProjects } = projectsContexts!

    const { openDrawer } = useDrawer()

    const { line } = useTranslate()

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
            {
                genres.slice(0, 3).map((i, index) => {
                    return (
                        <Option selected={projectFilters.genres.includes(i.value)} icon={i.icon} label={i.title[lang]} onClick={() => toggle(i.value)} key={index} />
                    )
                })
            }
            <button className="w-fit text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider leading-none transition-all duration-300 cursor-pointer ease-in-out text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200" onClick={() => handleViewAll()}>
                {line('viewAll')}
            </button>
        </FilterSection>
    )
}