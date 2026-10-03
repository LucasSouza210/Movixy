import { ring } from "ldrs";
import ListLayout from "./search-list/ListLayout";

export default function DropdownLoading() {

    ring.register()

    return (
        <div className="w-full flex relative">
            <ListLayout />
            <div className="size-full flex items-center justify-center absolute z-20 bg-zinc-100/40 dark:bg-zinc-900/40">
                <l-ring stroke="2" speed="2" color="oklch(70.5% 0.213 47.604)" />
            </div>
        </div>
    )
}