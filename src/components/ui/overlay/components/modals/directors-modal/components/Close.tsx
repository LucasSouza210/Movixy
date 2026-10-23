import { useTranslate } from "../../../../../../../translations/Translations";
import { IoClose } from "react-icons/io5";

export default function Close() {

    const { line } = useTranslate()

    return (
        <button className="size-9 sm:size-10 md:size-11 lg:size-8 xl:size-9 2xl:size-10 flex items-center justify-center self-end border rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-[7px] xl:rounded-lg 2xl:rounded-[9px] mt-1 sm:mt-1.25 md:mt-1.5 lg:mt-0.5 xl:mt-0.75 2xl:mt-1 group action-elevated border-action" aria-label={line('ariaClose')}>
            <IoClose className="size-2/3 fill-zinc-400 group-hover:fill-zinc-600 dark:group-hover:fill-zinc-200" />
        </button>
    )
}