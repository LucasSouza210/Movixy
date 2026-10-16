import { FaCheck } from "react-icons/fa";

export default function Confirm({ confirm, open }: { confirm: () => void, open: () => void }) {

    const handleClick = () => {
        confirm()
        open()
    }

    return (
        <button className="size-10 sm:size-11 md:size-12 lg:size-8 xl:size-9 2xl:size-10 flex items-center justify-center rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg transition-all duration-300 ease-in-out cursor-pointer group bg-orange-500 hover:bg-orange-600 dark:hover:bg-orange-400" onClick={() => handleClick()}>
            <FaCheck className="size-1/2 fill-zinc-100 group-hover:fill-white" />
        </button>
    )
}