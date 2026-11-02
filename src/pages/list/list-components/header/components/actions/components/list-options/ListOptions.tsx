import FilterButton from "./components/FilterButton";
import OrdenButton from "./components/OrderButton";

export default function ListOptions() {
    return (
        <div className="flex items-center gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-2.5 xl:gap-3 2xl:gap-3.5 shrink-0">
            <OrdenButton />
            <FilterButton />
        </div>
    )
}