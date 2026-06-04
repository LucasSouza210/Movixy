import { PiSlidersHorizontalBold } from "react-icons/pi";

export default function ProjectsFilterButton() {
    return (
        <button className="size-8 flex items-center justify-center rounded-full bg-orange-400 dark:bg-orange-500">
            <PiSlidersHorizontalBold className="size-1/2 text-zinc-100"/>
        </button>
    )
}