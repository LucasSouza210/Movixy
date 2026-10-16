import type { SaveTarget } from "../../../../../../../../../types/tmdb";
import { editLists } from "../../../../../../../../../utils/tmdb/editLists";
import { FaCheck } from "react-icons/fa";
import useDrawer from "../../../../../../../../../hooks/useDrawer";

export default function SaveItem({ item, selected, original }: { item: SaveTarget, selected: string[] | null, original: string[] | null }) {

    const { closeDrawer } = useDrawer()

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
        <button className="size-10 sm:size-11 md:size-12 lg:size-8 xl:size-9 2xl:size-10 flex items-center justify-center group border rounded-[10px] sm:rounded-[11px] md:rounded-xl lg:rounded-[7px] xl:rounded-lg 2xl:rounded-[9px] action-default border-action" onClick={() => handleClick()}>
            <FaCheck className="size-2/5 fill-zinc-500 group-hover:fill-zinc-700 dark:fill-zinc-300 dark:group-hover:fill-zinc-100" />
        </button>
    )
}