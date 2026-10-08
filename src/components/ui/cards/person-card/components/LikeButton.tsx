import { useState } from "react"
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function LikeButton() {

    const [liked, setLiked] = useState(false)

    const handleLike = () => {
        setLiked(prev => !prev)
    }

    const Icon = liked ? FaHeart : FaRegHeart

    return (
        <button className="size-3/10 flex items-center justify-center border rounded-full absolute bottom-0 right-0 backdrop-blur-[2px] group transition-all duration-300 ease-in-out cursor-pointer bg-zinc-400/50 hover:bg-zinc-400/60 dark:bg-zinc-800/50 dark:hover:bg-zinc-800/60 border-zinc-400/50 hover:border-zinc-500/50 dark:border-zinc-700/50 dark:hover:border-zinc-600/50" onClick={(e) => {
            e.stopPropagation()
            handleLike()
        }}>
            {
                <Icon className={`size-1/2 ${liked ? 'fill-orange-500' : 'fill-zinc-200 dark:fill-zinc-400 group-hover:fill-orange-500'}`} />
            }
        </button>
    )
}