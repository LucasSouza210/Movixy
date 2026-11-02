import ListOptions from "./components/list-options/ListOptions";
import ListSearch from "./components/list-search/ListSearch";

export default function Actions({ search, setSearch }: { search: string, setSearch: React.Dispatch<React.SetStateAction<string>> }) {
    return (
        <div className="flex items-center lg:items-end lg:justify-between gap-4 sm:gap-4.5 md:gap-5 lg:gap-0">
            <ListSearch search={search} setSearch={setSearch} />
            <ListOptions />
        </div>
    )
}