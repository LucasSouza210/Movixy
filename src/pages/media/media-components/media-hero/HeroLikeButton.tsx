import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function HeroLikeButton() {

    const liked = false
    const style = `${liked ? 'fill-red-500' : 'fill-zinc-300 lg:fill-zinc-600 lg:group-hover:fill-zinc-700 lg:dark:fill-zinc-300 lg:dark:group-hover:fill-zinc-200'} size-1/2 lg:size-45/100`

    return (
        <button className="size-7 sm:size-8 md:size-9 lg:size-6 xl:size-7 2xl:size-8 flex items-center justify-center border rounded-full backdrop-blur-[2px] transition-all duration-300 ease-in-out cursor-pointer group bg-zinc-900/50 lg:action-default border-zinc-800/50 lg:border-action">
            {
                liked ?
                    <FaHeart className={style} />
                    :
                    <FaRegHeart className={style} />
            }
        </button>
    )
}