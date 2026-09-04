import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function HeroLikeButton() {

    const [liked, setLiked] = useState(false)

    const Icon = liked ? FaHeart : FaRegHeart

    return (
        <button className="size-7 sm:size-8 md:size-9 lg:size-6 xl:size-7 2xl:size-8 flex items-center justify-center border rounded-full backdrop-blur-[2px] transition-all duration-300 ease-in-out cursor-pointer group bg-zinc-900/50 hover:bg-zinc-950/50 border-zinc-700/50 hover:border-zinc-600/50 lg:action-default lg:border-action" onClick={() => setLiked(prev => !prev)}>
            <Icon className={`size-1/2 lg:size-9/20 ${liked ? 'fill-orange-500' : 'fill-zinc-400 hover:fill-zinc-300 lg:fill-zinc-500 lg:group-hover:fill-zinc-600 lg:dark:fill-zinc-400 lg:dark:group-hover:fill-zinc-300'}`} />
        </button>
    )
}