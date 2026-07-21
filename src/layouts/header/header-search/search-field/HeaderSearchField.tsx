import { useContext } from "react"
import { HeaderSearchContexts } from "../../../../contexts/HeaderSearchProvider"
import { useTranslate } from "../../../../translations/Translations"
import OpenSearchButton from "./OpenSearchButton"
import ClearSearchButton from "./ClearSearchButton"

export default function HeaderSearchField({ toggle }: { toggle: (option: 'open' | 'close') => void }) {

    const projectsContexts = useContext(HeaderSearchContexts)

    const { search, setSearch, searchOpen, setLoading } = projectsContexts!

    const { line } = useTranslate()

    const handleChange = (value: string) => {
        setLoading(true)
        setSearch(value)
    }

    return (
        <div className={`flex items-center border rounded-full ${searchOpen ? 'w-full sm:w-3/4 lg:w-3/6 2xl:w-2/5 h-3/5 justify-between pl-4.5 sm:pl-5 md:pl-5.5 lg:pl-4 xl:pl-4.75 2xl:pl-5.5 pr-3.5 sm:pr-4 md:pr-4.5 lg:pr-3.5 xl:pr-4 2xl:pr-4.5 bg-zinc-100/40 dark:bg-zinc-900/40 border-zinc-400/40 dark:border-zinc-700/40' : 'size-fit lg:w-3/6 2xl:w-2/5 h-3/5 justify-end max-lg:border-transparent lg:justify-between lg:pl-4 xl:pl-4.75 2xl:pl-5.5 lg:pr-3.5 xl:pr-4 2xl:pr-4.5 lg:border-zinc-400/40 lg:dark:border-zinc-700/40 lg:bg-zinc-100 lg:dark:bg-zinc-900/40'}`}>
            <input type="text" value={search} placeholder={line('searchPlaceholder')} className={`h-full outline-none text-xs lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider lg:tracking-wide 2xl:tracking-wider pr-2.5 sm:pr-3 md:pr-3.5 lg:pr-2.5 xl:pr-3 2xl:pr-3.5 text-zinc-600 dark:text-zinc-200 placeholder:text-zinc-500 dark:placeholder:text-zinc-300 ${searchOpen ? 'block size-full' : 'hidden lg:block lg:size-full'}`} onChange={(e) => handleChange(e.target.value)} onFocus={() => toggle('open')} />
            {
                search == '' ?
                    <OpenSearchButton />
                    :
                    <ClearSearchButton />
            }
        </div>
    )
}