import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function HeroLikeButton() {

    const liked = false
    const style = `${liked ? 'fill-red-500' : 'fill-zinc-300 lg:fill-zinc-600 lg:group-hover:fill-zinc-700 lg:dark:fill-zinc-300 lg:dark:group-hover:fill-zinc-200'} size-1/2`

    return (
        <button className="size-7 sm:size-8 md:size-9 lg:size-6 flex items-center justify-center border rounded-full backdrop-blur-[2px] transition-all duration-300 ease-in-out cursor-pointer group bg-zinc-900/50 lg:bg-white lg:hover:bg-zinc-50 lg:dark:bg-zinc-950 lg:dark:hover:bg-zinc-900/50 border-zinc-800/50 lg:border-zinc-200 lg:hover:border-zinc-300 lg:dark:border-zinc-800 lg:dark:hover:border-zinc-700">
            {
                liked ?
                    <FaHeart className={style} />
                    :
                    <FaRegHeart className={style} />
            }
        </button>
    )
}