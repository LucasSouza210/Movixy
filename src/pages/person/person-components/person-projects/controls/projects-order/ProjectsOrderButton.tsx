import useClickOutside from "../../../../../../hooks/useClickOutside";
import ProjectsOrderDropdown from "./ProjectsOrderDropdown";
import { TbArrowsSort } from "react-icons/tb";

export default function ProjectsOrderButton() {

    const { ref, open, toggle, close } = useClickOutside()

    return (
        <div className="flex flex-col items-center relative" ref={ref}>
            <button className="size-8 sm:size-9 md:size-10 lg:size-7 xl:size-8 2xl:size-9 flex items-center justify-center rounded-full border transition-all duration-300 ease-in-out cursor-pointer group bg-white hover:bg-zinc-50 dark:bg-zinc-950/50 dark:hover:bg-zinc-900/50 border-zinc-200 hover:border-zinc-300 dark:border-zinc-800/80 dark:hover:border-zinc-700/80" onClick={toggle}>
                <TbArrowsSort className="size-1/2 text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300" />
            </button>
            <ProjectsOrderDropdown open={open} close={close} />
        </div>
    )
}