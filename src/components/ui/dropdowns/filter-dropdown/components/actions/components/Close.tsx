import { IoClose } from "react-icons/io5";
import { useTranslate } from "../../../../../../../translations/Translations";

export default function Close({ close }: { close: () => void }) {

    const { line } = useTranslate()

    return (
        <button className="size-8 sm:size-9 md:size-10 lg:size-7 xl:size-8 2xl:size-9 flex items-center justify-center rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg border action-on-default border-action" aria-label={line('ariaClose')} onClick={() => close()}>
            <IoClose className="size-3/5 fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-300 dark:group-hover:fill-zinc-200" />
        </button>
    )
}