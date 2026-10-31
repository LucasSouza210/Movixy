import type { SaveTarget } from "../../../../../../../../types/tmdb";
import Close from "./components/Close";
import SaveItem from "./components/SaveItem";

export default function SaveDrawerActions({ item, selected, original, onSavedChange }: { item: SaveTarget, selected: string[] | null, original: string[] | null, onSavedChange?: (saved: boolean) => void }) {
    return (
        <div className="w-full flex items-center justify-end gap-3 sm:gap-3.5 md:gap-4 lg:gap-2.5 xl:gap-2.75 2xl:gap-3">
            <Close />
            <SaveItem item={item} selected={selected} original={original} onSavedChange={onSavedChange} />
        </div>
    )
}