import { PiSlidersHorizontalBold } from "react-icons/pi";
import useClickOutside from "../../../../../../../../../hooks/useClickOutside";
import FilterDropdown from "../../../../../../../../../components/ui/dropdowns/filter-dropdown/FilterDropdown";

export default function FilterButton() {

    const { ref, open, toggle, close, openDropdown } = useClickOutside()

    return (
        <div className="flex flex-col items-center relative" ref={ref}>
            <button className="size-8 sm:size-9 md:size-10 lg:size-7 xl:size-8 2xl:size-9 flex items-center justify-center rounded-full action-brand" onClick={toggle}>
                <PiSlidersHorizontalBold className="size-1/2 fill-zinc-100 group-hover:fill-white" />
            </button>
            <FilterDropdown isOpen={open} open={openDropdown} close={close} />
        </div>
    )
}