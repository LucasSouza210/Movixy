import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function PersonLikeButton() {

    const [liked, setLiked] = useState(false)

    const Icon = !liked ? FaRegHeart : FaHeart

    return (
        <button className="size-8 sm:size-10 md:size-12 lg:size-8 xl:size-9.5 2xl:size-11 flex items-center justify-center rounded-full border border-default group transition-all duration-200 ease-in-out cursor-pointer bg-white hover:bg-zinc-50 dark:bg-zinc-950/50 dark:hover:bg-zinc-900" onClick={() => setLiked(prev => !prev)}>
            <Icon className={`${!liked ? 'fill-zinc-400 group-hover:fill-zinc-500 dark:fill-zinc-300' : 'fill-orange-400 group-hover:fill-orange-300 dark:fill-orange-500 dark:group-hover:fill-orange-600'} size-1/2`} />
        </button>
    )
}