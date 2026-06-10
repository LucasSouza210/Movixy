import { useContext } from "react";
import { ProjectsContexts } from "../../../../../../contexts/ProjectsProvider";
import useFormattedRate from "../../../../../../hooks/useFormattedRate";
import { BsCheckLg } from "react-icons/bs";

export default function ApplyFiltersButton({ close }: { close: () => void }) {

    const projectsContexts = useContext(ProjectsContexts)

    const { projects, setFilteredProjects, projectFilters, setProjectFilters } = projectsContexts!

    const formatRate = useFormattedRate

    const applyFilters = () => {

        if (projectFilters.type === "all" && projectFilters.genres.length === 0 && projectFilters.rate.min === 0 && projectFilters.rate.max === 10) {
            setFilteredProjects(null)
            close()
            return
        }

        const list = projects.filter(i =>
            (projectFilters.type === "all" || i.media_type === projectFilters.type) &&
            Number(formatRate(i.vote_average!)) <= projectFilters.rate.max &&
            Number(formatRate(i.vote_average!)) >= projectFilters.rate.min &&
            (projectFilters.genres.length === 0 || projectFilters.genres.every(genre => i.genre_ids.includes(genre))
            )
        )

        setFilteredProjects(list)
        close()
    }

    return (
        <button className="size-8 flex items-center justify-center rounded-[10px] transition-all duration-200 cursor-pointer ease-in-out bg-orange-400 hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-400" onClick={() => applyFilters()}>
            <BsCheckLg className="size-1/2 fill-zinc-100 group-hover:fill-white" />
        </button>
    )
}