import { FaTrash } from "react-icons/fa";

export default function Clean({ clean }: { clean: () => void }) {
    return (
        <button className="size-10 sm:size-11 md:size-12 lg:size-8 xl:size-9 2xl:size-10 flex items-center justify-center border rounded-[10px] sm:rounded-[11px] md:rounded-xl lg:rounded-[7px] xl:rounded-lg 2xl:rounded-[9px] action-default border-action" onClick={() => clean()}>
            <FaTrash className="size-1/2 fill-zinc-400 group-hover:fill-zinc-500 dark:fill-zinc-100 dark:group-hover:fill-white" />
        </button>
    )
}