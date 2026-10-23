import { useTranslate } from "../../../../../../../../../translations/Translations";
import { editLists } from "../../../../../../../../../utils/tmdb/editLists";
import type { SaveTarget } from "../../../../../../../../../types/tmdb";
import { FaCheck } from "react-icons/fa";
import useDrawer from "../../../../../../../../../hooks/useDrawer";

export default function SaveItem({ item, selected, original }: { item: SaveTarget, selected: string[] | null, original: string[] | null }) {

    const { closeDrawer } = useDrawer()

    const {line} = useTranslate()

    const handleClick = async () => {
        if (!item.type || !selected) return

        try {
            await editLists(item.id, item.type, selected, original)
            closeDrawer()
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <button className="size-10 sm:size-11 md:size-12 lg:size-8 xl:size-9 2xl:size-10 flex items-center justify-center group border rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg action-elevated border-action" aria-label={line('ariaSave')} onClick={() => handleClick()}>
            <FaCheck className="size-1/2 fill-zinc-500 group-hover:fill-zinc-700 dark:fill-zinc-300 dark:group-hover:fill-zinc-100" />
        </button>
    )
}