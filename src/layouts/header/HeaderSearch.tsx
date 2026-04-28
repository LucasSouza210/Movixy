import { IoSearch } from "react-icons/io5";

export default function HeaderSearch() {
    return (
        <div className="flex items-center">
            <button>
                <IoSearch className="size-5 sm:size-5.5 md:size-6 lg:size-5 xl:size-5.5 2xl:size-6 fill-zinc-600 dark:fill-zinc-300"/>
            </button>
        </div>
    )
}