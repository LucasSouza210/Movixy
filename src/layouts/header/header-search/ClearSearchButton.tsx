import { IoClose } from "react-icons/io5";

export default function ClearSearchButton({ clear }: { clear: () => void }) {
    return (
        <button className="size-fit cursor-pointer group" onClick={() => clear()}>
            <IoClose className="size-4.5 sm:size-4.75 md:size-5 lg:size-4 xl:size-4.75 2xl:size-5.5 transition-all ease-in-out duration-200 cursor-pointer fill-zinc-500 group-hover:fill-zinc-700 dark:fill-zinc-400 dark:group-hover:fill-white" />
        </button>
    )
}