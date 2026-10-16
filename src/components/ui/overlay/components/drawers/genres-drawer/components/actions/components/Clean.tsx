import { FaTrash } from "react-icons/fa";

export default function Clean({ clean }: { clean: () => void }) {
    return (
        <button className="size-10 sm:size-11 md:size-12 lg:size-8 xl:size-9 2xl:size-10 flex items-center justify-center border rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg action-elevated border-action" onClick={() => clean()}>
            <FaTrash className="size-1/2 fill-zinc-400 group-hover:fill-zinc-500 dark:fill-zinc-100 dark:group-hover:fill-white" />
        </button>
    )
}