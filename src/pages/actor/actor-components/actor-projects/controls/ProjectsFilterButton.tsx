import { PiSlidersHorizontalBold } from "react-icons/pi";

export default function ProjectsFilterButton() {
    return (
        <button className="size-8 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ease-in-out group bg-orange-400 hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-400">
            <PiSlidersHorizontalBold className="size-1/2 text-zinc-100 group-hover:text-white"/>
        </button>
    )
}