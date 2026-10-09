import { useContext } from "react"
import { HeaderSearchContexts } from "../../../../../../contexts/HeaderSearchProvider"
import { useTranslate } from "../../../../../../translations/Translations"
import { IoSearch } from "react-icons/io5";
import ClearSearchButton from "./ClearSearchButton"

export default function HeaderSearchField({ toggle }: { toggle: (option: 'open' | 'close') => void }) {

    const searchContexts = useContext(HeaderSearchContexts)

    const { search, setSearch, setLoading } = searchContexts!

    const { line } = useTranslate()

    const handleChange = (value: string) => {
        setLoading(true)
        setSearch(value)
    }

    return (
        <div className="w-full h-3/5 flex items-center justify-between border rounded-full pl-4.5 sm:pl-5 md:pl-5.5 lg:pl-4 xl:pl-4.75 2xl:pl-5.5 pr-3.5 sm:pr-4 md:pr-4.5 lg:pr-3.5 xl:pr-4 2xl:pr-4.5 bg-zinc-100/40 dark:bg-zinc-900/40 border-zinc-400/40 dark:border-zinc-700/40">
            <input type="text" value={search} placeholder={line('searchPlaceholder')} className="size-full text-xs sm:text-[13px] md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider lg:tracking-wide 2xl:tracking-wider outline-none pr-2.5 sm:pr-3 md:pr-3.5 lg:pr-2.5 xl:pr-3 2xl:pr-3.5 text-default placeholder:text-zinc-400" onChange={(e) => handleChange(e.target.value)} onFocus={() => toggle('open')} />
            {
                search == '' ?
                    <IoSearch className="size-4.5 sm:size-4.75 md:size-5 lg:size-4 xl:size-4.75 2xl:size-5.5 transition-all ease-in-out duration-200 fill-zinc-500 dark:fill-zinc-400" />
                    :
                    <ClearSearchButton />
            }
        </div>
    )
}