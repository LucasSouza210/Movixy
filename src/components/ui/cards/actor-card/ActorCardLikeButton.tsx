import { useState } from "react"
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function ActorCardLikeButton() {

    const [liked, setLiked] = useState(false)

    const handleLike = () => {
        setLiked(prev => !prev)
    }

    const Icon = liked ? FaHeart : FaRegHeart

    return (
        <button className="size-7 sm:size-8 md:size-9 lg:size-7 xl:size-8 2xl:size-9 flex items-center justify-center border rounded-full absolute bottom-0 sm:bottom-px md:bottom-0.5 lg:bottom-0 xl:bottom-0.5 2xl:bottom-1 right-0 sm:right-px md:right-0.5 lg:right-0 xl:right-0.5 2xl:right-1 backdrop-blur-[2px] bg-zinc-600/60 dark:bg-zinc-800/40 border-zinc-300 dark:border-zinc-700" onClick={(e) => {
            e.stopPropagation()
            handleLike()
        }}>
            {
                <Icon className={`${liked ? 'fill-orange-500' : 'fill-zinc-200 dark:fill-zinc-500'} size-1/2`} />
            }
        </button>
    )
}