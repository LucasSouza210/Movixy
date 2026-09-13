import { useState } from "react";
import SearchField from "./components/SearchField";
import SearchToggle from "./components/SearchToggle";

export default function ListSearch() {

    const [search, setSearch] = useState('')

    return (
        <div className="w-full lg:w-3/7 h-10 sm:h-11 md:h-12 lg:h-8 xl:h-9 2xl:h-10 flex items-center pl-4 sm:pl-4.5 md:pl-5 lg:pl-4 xl:pl-4.5 2xl:pl-5 rounded-full border bg-default border-default">
            <SearchField search={search} setSearch={setSearch} />
            <SearchToggle search={search} setSearch={setSearch} />
        </div>
    )
}