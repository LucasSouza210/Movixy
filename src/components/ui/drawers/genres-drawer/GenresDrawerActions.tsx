import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function GenresDrawerActions({ any, clean, confirm }: { any: boolean, clean: () => void, confirm: () => void }) {
    return (
        <div className="flex items-center justify-end gap-4">
            {
                !any &&
                <button className="size-10 flex items-center justify-center text-sm font-medium tracking-wider leading-none border rounded-xl transition-all duration-300 ease-in-out cursor-pointer group bg-white hover:bg-zinc-50 dark:bg-zinc-950/50 dark:hover:bg-zinc-900 border-zinc-300 dark:border-zinc-700" onClick={() => clean()}>
                    <FaTrash className="size-1/2 fill-zinc-400 group-hover:fill-zinc-500 dark:fill-zinc-100 dark:group-hover:fill-white" />
                </button>
            }
            <button className="size-10 flex items-center justify-center text-sm font-medium tracking-wider leading-none rounded-xl transition-all duration-300 ease-in-out cursor-pointer group bg-orange-500 hover:bg-orange-600 dark:hover:bg-orange-400" onClick={() => confirm()}>
                <FaCheck className="size-1/2 fill-zinc-100 group-hover:fill-white" />
            </button>
        </div>
    )
}