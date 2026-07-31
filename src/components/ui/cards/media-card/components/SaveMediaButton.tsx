import { useState } from "react";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";

export default function SaveMediaButton() {

    const [saved, setSaved] = useState(false)

    const Icon = saved ? FaBookmark : FaRegBookmark

    const handleSave = () => {
        setSaved(prev => !prev)
    }

    return (
        <button className="flex size-8 sm:size-9 md:size-10 lg:size-6 xl:size-7 2xl:size-8 items-center justify-center border rounded-full absolute z-20 top-4 sm:top-5 md:top-6 lg:top-3 xl:top-3.5 2xl:top-4 right-4 sm:right-5 md:right-6 lg:right-3 xl:right-3.5 2xl:right-4 backdrop-blur-xs group/save cursor-pointer bg-zinc-700/40 hover:bg-zinc-800/60 border-zinc-500/40 hover:border-zinc-400/40" onClick={(e) => {
            e.stopPropagation()
            handleSave()
        }}>
            {
                <Icon className={`${saved ? 'fill-orange-400' : 'fill-zinc-300 group-hover/save:fill-zinc-200'} size-1/2 transition-all duration-300 ease-in-out`} />
            }
        </button>
    )
}