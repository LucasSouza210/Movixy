import type { SaveTarget } from "../../../../../../../types/tmdb";
import { editLists } from "../../../../../../../utils/tmdb/editLists";
import { FaCheck } from "react-icons/fa";
import useDrawer from "../../../../../../../hooks/useDrawer";

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
        <button className="size-8 sm:size-9 md:size-10 lg:size-7 xl:size-8 2xl:size-9 flex items-center justify-center border rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-[7px] xl:rounded-lg 2xl:rounded-[9px] bg-white dark:bg-zinc-800/20 border-zinc-300 dark:border-zinc-700/70" onClick={() => handleClick()}>
            <FaCheck className="size-2/5 fill-zinc-500 dark:fill-zinc-300" />
        </button>
    )
}