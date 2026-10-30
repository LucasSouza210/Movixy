import { useContext } from "react"
import { MediaListContexts } from "../../../../../contexts/MediaListProvider"

export default function SortOption({ title, value, close }: { title: string, value: 'newest' | 'oldest' | 'highest_rated' | 'lowest_rated', close: () => void }) {

    const { sortBy, setSortBy } = useContext(MediaListContexts)!

    const changeOption = (value: 'newest' | 'oldest' | 'highest_rated' | 'lowest_rated') => {
        close()
        setSortBy(value)
    }

    return (
        <button className={`h-10 sm:h-12 md:h-14 lg:h-8 xl:h-10 2xl:h-12 text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wide sm:tracking-wider lg:tracking-wide 2xl:tracking-wider whitespace-nowrap rounded-[10px] sm:rounded-xl md:rounded-[14px] lg:rounded-lg xl:rounded-[10px] 2xl:rounded-xl px-4 sm:px-5 md:px-6 lg:px-3 xl:px-4 2xl:px-5 ${sortBy == value ? 'bg-orange-400 dark:bg-orange-500 text-white' : 'transition-all duration-300 ease-in cursor-pointer text-action hover:bg-zinc-100 dark:hover:bg-zinc-900'}`} onClick={() => changeOption(value)}>
            {title}
        </button>
    )
}