import type { SaveTarget } from "../../../../../../../../types/tmdb";
import Close from "./components/Close";
import NewList from "./components/NewList";
import SaveItem from "./components/SaveItem";

export default function SaveDrawerActions({ item, selected, original, onSavedChange }: { item: SaveTarget, selected: string[] | null, original: string[] | null, onSavedChange?: (saved: boolean) => void }) {
    return (
        <div className="w-full flex items-center justify-between pt-6 sm:pt-7 md:pt-8 lg:pt-5 xl:pt-5.5 2xl:pt-6 border-t border-default">
            <Close />
            <div className="flex items-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-2.5 xl:gap-2.75 2xl:gap-3">
                <SaveItem item={item} selected={selected} original={original} onSavedChange={onSavedChange} />
                <NewList item={item} onSavedChange={onSavedChange} />
            </div>
        </div>
    )
}