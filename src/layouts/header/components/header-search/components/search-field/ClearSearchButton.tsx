import { useContext } from "react";
import { HeaderSearchContexts } from "../../../../../../contexts/HeaderSearchProvider";
import { useTranslate } from "../../../../../../translations/Translations";
import { IoClose } from "react-icons/io5";

export default function ClearSearchButton() {

    const searchContexts = useContext(HeaderSearchContexts)

    const { search, setSearch } = searchContexts!

    const { line } = useTranslate()

    const handleClear = () => {
        search !== '' && setSearch('')
    }

    return (
        <button className="size-fit cursor-pointer group" aria-label={line("ariaClearSearch")} onClick={() => handleClear()}>
            <IoClose className="size-4.5 sm:size-4.75 md:size-5 lg:size-4 xl:size-4.75 2xl:size-5.5 transition-all ease-in-out duration-200 cursor-pointer fill-zinc-500 group-hover:fill-zinc-700 dark:fill-zinc-400 dark:group-hover:fill-white" />
        </button>
    )
}