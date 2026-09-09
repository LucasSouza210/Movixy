import type { SetStateAction } from "react"
import { useTranslate } from "../../../../../../../../../translations/Translations"

export default function SearchField({ search, setSearch }: { search: string, setSearch: React.Dispatch<SetStateAction<string>> }) {

    const { line } = useTranslate()

    return (
        <input value={search} type="text" placeholder={line('searchPlaceholder')} className="size-full text-xs sm:text-sm md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wide outline-none text-zinc-500 dark:text-zinc-300 placeholder:text-zinc-400" onChange={(e) => setSearch(e.target.value)} />
    )
}