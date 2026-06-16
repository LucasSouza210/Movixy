import { useContext } from "react"
import { ProjectsContexts } from "../../../../../../contexts/ProjectsProvider"

export default function SortOption({ title, value, close }: { title: string, value: 'newest' | 'oldest' | 'highest_rated' | 'lowest_rated', close: () => void }) {

    const projectsContexts = useContext(ProjectsContexts)

    const { sortBy, setSortBy } = projectsContexts!

    const changeOption = (value: 'newest' | 'oldest' | 'highest_rated' | 'lowest_rated') => {
        close()
        setSortBy(value)
    }

    return (
        <button className={`${sortBy == value ? 'bg-orange-400 dark:bg-orange-500 text-white' : 'transition-all duration-300 ease-in cursor-pointer text-zinc-500 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900'} h-10 text-xs font-medium tracking-wide leading-none whitespace-nowrap rounded-xl px-4`} onClick={() => changeOption(value)}>
            {title}
        </button>
    )
}