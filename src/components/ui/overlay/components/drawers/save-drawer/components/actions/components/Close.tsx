import { useTranslate } from "../../../../../../../../../translations/Translations";
import { FaXmark } from "react-icons/fa6";
import useDrawer from "../../../../../../../../../hooks/ui/useDrawer";

export default function Close() {

    const { closeDrawer } = useDrawer()

    const { line } = useTranslate()

    const handleClose = () => {
        closeDrawer()
    }

    return (
        <button className="size-10 sm:size-11 md:size-12 lg:size-8 xl:size-9 2xl:size-10 flex items-center justify-center group border rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg action-elevated border-action" aria-label={line('ariaClose')} onClick={() => handleClose()}>
            <FaXmark className="size-1/2 fill-zinc-500 group-hover:fill-zinc-700 dark:fill-zinc-300 dark:group-hover:fill-zinc-100" />
        </button>
    )
}