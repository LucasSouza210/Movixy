import useClickOutside from "../../../../../../hooks/useClickOutside";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import ProjectsFilterDropdown from "././ProjectsFilterDropdown";

export default function ProjectsFilterButton() {

    const { ref, open, toggle, close } = useClickOutside()

    return (
        <div className="flex flex-col items-center relative" ref={ref}>
            <button className="size-8 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ease-in-out group bg-orange-400 hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-400" onClick={toggle}>
                <PiSlidersHorizontalBold className="size-1/2 text-zinc-100 group-hover:text-white" />
            </button>
            <ProjectsFilterDropdown open={open} close={close} />
        </div>
    )
}