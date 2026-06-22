import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function ActorLikeButton() {

    const [liked, setLiked] = useState(false)

    const Icon = !liked ? FaRegHeart : FaHeart

    return (
        <button className="p-2 lg:p-1.5 flex items-center justify-center rounded-full border border-default bg-white dark:bg-zinc-950/50">
            <Icon className={`${!liked ? 'fill-zinc-400 dark:fill-zinc-300' : 'fill-orange-400 dark:fill-orange-500'} size-3.5 sm:size-4.5 md:size-5.5 lg:size-3.5`} onClick={() => setLiked(prev => !prev)} />
        </button>
    )
}