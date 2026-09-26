import useClickOutside from "../../../../../../../../../hooks/useClickOutside";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import ProjectsFilterDropdown from "./ProjectsFilterDropdown";

export default function ProjectsFilterButton() {

    const { ref, open, toggle, close } = useClickOutside()

    return (
        <div className="flex flex-col items-center relative" ref={ref}>
            <button className="size-8 sm:size-9 md:size-10 lg:size-6 xl:size-7 2xl:size-8 flex items-center justify-center rounded-full action-brand" onClick={toggle}>
                <PiSlidersHorizontalBold className="size-1/2 text-zinc-100 group-hover:text-white" />
            </button>
            <ProjectsFilterDropdown open={open} close={close} />
        </div>
    )
}