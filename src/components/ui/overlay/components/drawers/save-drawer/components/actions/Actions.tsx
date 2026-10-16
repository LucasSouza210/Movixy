import type { SaveTarget } from "../../../../../../../../types/tmdb";
import SaveItem from "./components/SaveItem";

export default function SaveDrawerActions({ item, selected, original }: { item: SaveTarget, selected: string[] | null, original: string[] | null }) {
    return (
        <div className="w-full flex items-center justify-end">
            <SaveItem item={item} selected={selected} original={original} />
        </div>
    )
}