import { useState } from "react"
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";


export default function MediaSaveButton() {

    const [saved, setSaved] = useState<boolean>(false)

    const Icon = saved ? FaBookmark : FaRegBookmark

    return (
        <button className="size-10 md:size-12 flex items-center justify-center border-2 rounded-full backdrop-blur-[2px] group cursor-pointer bg-zinc-900/40 hover:bg-zinc-800/40 border-zinc-600/40 hover:border-zinc-500/40" onClick={() => setSaved(prev => !prev)}>
            <Icon className={`size-2/5 ${saved ? 'fill-orange-500' : 'fill-zinc-500 group-hover:fill-zinc-400'}`} />
        </button>
    )
}