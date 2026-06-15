import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function GenresDrawerActions({ any, clean, confirm }: { any: boolean, clean: () => void, confirm: () => void }) {
    return (
        <div className="flex items-center justify-end gap-4">
            {
                !any &&
                <button className="size-10 flex items-center justify-center text-sm font-medium tracking-wider leading-none border rounded-xl bg-zinc-950/50 border-zinc-700" onClick={() => clean()}>
                    <FaTrash className="size-1/2 fill-zinc-100" />
                </button>
            }
            <button className="size-10 flex items-center justify-center text-sm font-medium tracking-wider leading-none rounded-xl bg-orange-500" onClick={() => confirm()}>
                <FaCheck className="size-1/2 fill-zinc-100" />
            </button>
        </div>
    )
}