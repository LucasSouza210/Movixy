import type { Movie } from "../../pages/home/home-components/home-slider/HomeSlider";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";

export default function MediaCard({ media }: { media: Movie }) {

    const getIcon = () => {
        return (
            true ? FaRegBookmark : FaBookmark
        )
    }

    return (
        <div className="shrink-0 flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-3 xl:gap-4 2xl:gap-5 relative group cursor-pointer">
            <img src={`https://image.tmdb.org/t/p/original${media?.poster_path}`} alt={media?.title} loading="lazy" decoding="async" draggable={false} className="w-full aspect-2/3 object-cover rounded-3xl sm:rounded-[28px] md:rounded-4xl lg:rounded-2xl xl:rounded-[20px] 2xl:rounded-3xl" />
            <div className="flex flex-col gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-1 xl:gap-1.5 2xl:gap-2">
                <p className="font-medium text-base sm:text-lg md:text-xl lg:text-xs xl:text-sm 2xl:text-base tracking-wider leading-6 sm:leading-6.5 md:leading-7 lg:leading-5 xl:leading-5.75 2xl:leading-6.5 text-zinc-800 dark:text-zinc-200">{media.title}</p>
                <p className="font-medium text-sm sm:text-base md:text-lg lg:text-[10px] xl:text-xs 2xl:text-sm tracking-wide leading-none text-zinc-500 dark:text-zinc-400">{media.release_date.split("-").reverse().join("-").replace(/-/g, " ")}</p>
            </div>
            <button className="hidden group-hover:flex size-8 sm:size-9 md:size-10 lg:size-6 xl:size-7 2xl:size-8 items-center justify-center border rounded-full absolute top-4 sm:top-5 md:top-6 lg:top-3 xl:top-3.5 2xl:top-4 right-4 sm:right-5 md:right-6 lg:right-3 xl:right-3.5 2xl:right-4 backdrop-blur-xs group cursor-pointer bg-zinc-400/20 border-zinc-400/30">
                {
                    getIcon()({ className: "size-1/2 transition-all duration-300 ease-in-out fill-zinc-400 group-hover:fill-zinc-200" })
                }
            </button>
        </div>
    )
}