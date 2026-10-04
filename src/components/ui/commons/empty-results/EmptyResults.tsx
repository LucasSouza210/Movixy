import { LuSearchX } from "react-icons/lu"
import Title from "./components/Title"
import ClearFilters from "./components/ClearFilters"

export default function EmptyResults() {
    return (
        <div className="flex flex-col items-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-3.5 2xl:gap-4">
            <LuSearchX className="size-12 sm:size-14 md:size-16 lg:size-10 xl:size-11 2xl:size-12 text-zinc-500 dark:text-zinc-300" />
            <div className="flex flex-col items-center gap-1.5 sm:gap-2.25 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2">
                <Title />
                <ClearFilters />
            </div>
        </div>
    )
}