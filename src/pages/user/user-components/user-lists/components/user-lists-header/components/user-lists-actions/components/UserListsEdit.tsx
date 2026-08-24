import { LuPencil } from "react-icons/lu";

export default function UserListsEdit() {
    return (
        <button className="size-8 sm:size-9 md:size-10 lg:size-7 xl:size-8 2xl:size-9 flex items-center justify-center border rounded-full action-default border-action">
            <LuPencil className="size-2/5 transition-all duration-200 ease-in-out text-zinc-400 group-hover:text-zinc-500/90 dark:text-zinc-300 dark:group-hover:text-white" />
        </button>
    )
}