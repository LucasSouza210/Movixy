import { MdModeEditOutline } from "react-icons/md";

export default function ListEdit() {
    return (
        <button className="size-7 sm:size-8 md:size-9 lg:size-6 xl:size-7 2xl:size-8 flex items-center justify-center absolute shrink-0 group top-6 sm:top-7 md:top-8 lg:top-6 xl:top-7 2xl:top-8 right-6 sm:right-7 md:right-8 lg:right-6 xl:right-7 2xl:right-8 rounded-full border border-action card-action" onClick={(e) => e.stopPropagation()}>
            <MdModeEditOutline className="size-1/2 text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300" />
        </button>
    )
}