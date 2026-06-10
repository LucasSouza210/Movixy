import ApplyFiltersButton from "./ApplyFiltersButton";
import { IoClose } from "react-icons/io5";

export default function FilterActions({ close }: { close: () => void }) {
    return (
        <div className="flex self-end gap-3">
            <button className="size-8 flex items-center justify-center rounded-[10px] border transition-all duration-200 cursor-pointer ease-in-out bg-zinc-50 hover:bg-white dark:bg-zinc-950 dark:hover:bg-zinc-900 border-zinc-200 dark:border-zinc-800" onClick={() => close()}>
                <IoClose className="size-1/2 fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-300 dark:group-hover:fill-zinc-200" />
            </button>
            <ApplyFiltersButton close={close} />
        </div>
    )
}