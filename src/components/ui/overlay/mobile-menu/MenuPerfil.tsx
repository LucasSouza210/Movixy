import { FaUserCircle } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export default function MenuPerfil() {

    return (
        <div className="w-full h-36 flex items-center justify-center relative rounded-3xl bg-white dark:bg-zinc-950/30">
            <div className="flex items-center gap-4">
                <FaUserCircle className="size-12 fill-zinc-400" />
                <p className="font-medium tracking-wider leading-none text-black dark:text-white">John Doe</p>
            </div>
            <button className="size-6 flex items-center justify-center absolute right-4 bottom-4 border rounded-full border-default bg-zinc-50 dark:bg-zinc-950/10">
                <FiArrowUpRight className="size-3/5 text-zinc-600 dark:text-zinc-300"/>
            </button>
        </div>
    )
}