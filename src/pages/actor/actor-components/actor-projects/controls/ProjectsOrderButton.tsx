import { TbArrowsSort } from "react-icons/tb";

export default function ProjectsOrderButton() {
    return (
        <button className="size-8 flex items-center justify-center rounded-full border transition-all duration-300 ease-in-out cursor-pointer group bg-white hover:bg-zinc-50 dark:bg-zinc-950/50 dark:hover:bg-zinc-900/50 border-zinc-200 hover:border-zinc-300 dark:border-zinc-800/80 dark:hover:border-zinc-700/80">
            <TbArrowsSort className="size-1/2 text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300" />
        </button>
    )
}