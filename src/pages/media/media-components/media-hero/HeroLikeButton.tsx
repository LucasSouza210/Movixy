import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function HeroLikeButton() {

    const liked = false
    const style = `${liked ? 'fill-red-500' : 'fill-zinc-300'} size-1/2`

    return (
        <button className="size-7 sm:size-8 md:size-9 flex items-center justify-center border rounded-full backdrop-blur-[2px] absolute bottom-0 right-0 bg-zinc-900/50 border-zinc-800/50">
            {
                liked ?
                    <FaHeart className={style} />
                    :
                    <FaRegHeart className={style} />
            }
        </button>
    )
}