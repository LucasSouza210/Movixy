import { useTranslate } from "../../../../../../../../../translations/Translations"
import { PiSlidersHorizontalBold } from "react-icons/pi"
import useClickOutside from "../../../../../../../../../hooks/ui/useClickOutside"
import useScrollOnOpen from "../../../../../../../../../hooks/ui/useScrollOnOpen"
import FilterDropdown from "../../../../../../../../../components/ui/dropdowns/filter-dropdown/FilterDropdown"

export default function Filter() {

    const { ref, open, toggle, close, openDropdown } = useClickOutside()

    const { line } = useTranslate()

    useScrollOnOpen(open, ref)

    return (
        <div className="flex flex-col items-center relative" ref={ref}>
            <button className="size-8 sm:size-9 md:size-10 lg:size-6 xl:size-7 2xl:size-8 flex items-center justify-center rounded-full action-brand" aria-label={line('ariaOpenFilters')} onClick={toggle}>
                <PiSlidersHorizontalBold className="size-1/2 text-zinc-100 group-hover:text-white" />
            </button>
            <FilterDropdown isOpen={open} open={openDropdown} close={close} />
        </div>
    )
}