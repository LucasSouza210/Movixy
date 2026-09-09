import ListOptions from "./components/list-options/ListOptions";
import ListSearch from "./components/list-search/ListSearch";

export default function ListActions() {
    return (
        <div className="flex items-center lg:items-end lg:justify-between gap-4 sm:gap-4.5 md:gap-5 lg:gap-0">
            <ListSearch />
            <ListOptions />
        </div>
    )
}