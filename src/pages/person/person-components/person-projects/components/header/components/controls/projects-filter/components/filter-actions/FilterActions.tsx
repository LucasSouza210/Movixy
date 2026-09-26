import ApplyFiltersButton from "./ApplyFiltersButton";
import { IoClose } from "react-icons/io5";

export default function FilterActions({ close }: { close: () => void }) {
    return (
        <div className="flex self-end gap-3 sm:gap-3.25 md:gap-3.5 lg:gap-2.5 xl:gap-2.75 2xl:gap-3">
            <button className="size-8 sm:size-9 md:size-10 lg:size-7 xl:size-8 2xl:size-9 flex items-center justify-center rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg border action-on-default border-action" onClick={() => close()}>
                <IoClose className="size-3/5 fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-300 dark:group-hover:fill-zinc-200" />
            </button>
            <ApplyFiltersButton close={close} />
        </div>
    )
}