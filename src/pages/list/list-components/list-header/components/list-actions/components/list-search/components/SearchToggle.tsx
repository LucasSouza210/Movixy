import type { SetStateAction } from "react"
import { IoClose, IoSearch } from "react-icons/io5"

export default function SearchToggle({ search, setSearch }: { search: string, setSearch: React.Dispatch<SetStateAction<string>> }) {

    const Icon = search == '' ? IoSearch : IoClose

    const handleClick = () => {
        search !== '' && setSearch('')
    }

    return (
        <button className="h-full px-3.5 sm:px-4 md:px-4.5 lg:px-3 xl:px-3.5 2xl:px-4 group" onClick={() => handleClick()}>
            <Icon className="size-4 sm:size-4.5 md:size-5 lg:size-3.5 xl:size-4 2xl:size-4.5 text-zinc-500 dark:text-zinc-300" />
        </button>
    )
}