import { MdModeEditOutline } from "react-icons/md";

export default function ListEdit() {
    return (
        <button className="size-7 sm:size-8 md:size-9 lg:size-6 xl:size-7 2xl:size-8 flex items-center justify-center shrink-0 group border rounded-full action-elevated border-action" onClick={(e) => e.preventDefault()}>
            <MdModeEditOutline className="size-1/2 text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300" />
        </button>
    )
}