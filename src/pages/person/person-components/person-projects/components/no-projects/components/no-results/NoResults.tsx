import { LuSearchX } from "react-icons/lu"
import Message from "./components/Message"
import ClearFilters from "./components/ClearFilters"

export default function NoResults() {
    return (
        <div className="flex flex-col items-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-3.5 2xl:gap-4">
            <LuSearchX className="size-2/11 text-zinc-500 dark:text-zinc-300" />
            <div className="flex flex-col items-center gap-1.5 sm:gap-2.25 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2">
                <Message />
                <ClearFilters />
            </div>
        </div>
    )
}