import { TbArrowsSort } from "react-icons/tb";

export default function ProjectsOrderButton() {
    return (
        <button className="size-8 flex items-center justify-center rounded-full border bg-white dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800">
            <TbArrowsSort className="size-1/2 text-zinc-500 dark:text-zinc-400"/>
        </button>
    )
}