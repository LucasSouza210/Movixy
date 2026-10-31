import { useState } from "react";
import { useTranslate } from "../../../../../../../../../translations/Translations";
import { editLists } from "../../../../../../../../../utils/tmdb/editLists";
import { isItemSaved } from "../../../../../../../../../services/lists-services/listsServices";
import type { SaveTarget } from "../../../../../../../../../types/tmdb";
import { FaCheck } from "react-icons/fa6";
import useDrawer from "../../../../../../../../../hooks/ui/useDrawer";

export default function SaveItem({ item, selected, original, onSavedChange }: { item: SaveTarget, selected: string[] | null, original: string[] | null, onSavedChange?: (saved: boolean) => void }) {

    const { closeDrawer } = useDrawer()

    const { line } = useTranslate()

    const [loading, setLoading] = useState(false)

    const handleClick = async () => {

        const { type } = item

        if (!type || !selected || loading) return

        setLoading(true)

        try {

            await editLists(item.id, type, selected, original)
            onSavedChange?.(selected.length > 0)
            closeDrawer()

        } catch (error) {

            console.error(error)

            isItemSaved(item.id, type)
                .then((saved) => onSavedChange?.(saved))
                .catch(console.error)

        } finally {
            setLoading(false)
        }
    }

    return (
        <button className="size-10 sm:size-11 md:size-12 lg:size-8 xl:size-9 2xl:size-10 flex items-center justify-center group border rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg action-elevated border-action" aria-label={line('ariaSave')} aria-disabled={loading} onClick={() => handleClick()}>
            <FaCheck className="size-1/2 fill-zinc-500 group-hover:fill-zinc-700 dark:fill-zinc-300 dark:group-hover:fill-zinc-100" />
        </button>
    )
}