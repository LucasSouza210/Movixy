import { useState } from "react";
import { useTranslate } from "../../../../../../../translations/Translations";
import { FaMedal } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function EpisodeRating() {

    const [hover, setHover] = useState<number | null>(null)
    const [rating, setRating] = useState<number | null>(null)

    const { line } = useTranslate()

    const active = hover ?? rating

    return (
        <div className="w-full h-30 sm:h-36 md:h-42 lg:h-auto shrink-0 flex flex-col justify-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 border-t lg:border-none px-6 sm:px-7 md:px-8 lg:p-0 bg-transparent border-zinc-300 dark:border-zinc-800">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-3 xl:gap-3.5 2xl:gap-4">
                <FaMedal className="size-4 sm:size-5 md:size-6 lg:size-4 xl:size-5 2xl:size-6 fill-zinc-400 lg:fill-zinc-300" />
                <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-2 lg:gap-1 xl:gap-1.5 2xl:gap-2">
                    <p className="text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wide leading-none text-zinc-800 dark:text-zinc-200 lg:text-zinc-100">{line('userRatingTitle')}</p>
                    <p className="text-[10px] sm:text-xs md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wide leading-none text-zinc-500 dark:text-zinc-400 lg:text-zinc-300">{line('userRatingSubtitle')}</p>
                </div>
            </div>
            <div className="w-full flex items-center justify-between pl-6 sm:pl-8 md:pl-10 lg:pl-7 xl:pl-8.5 2xl:pl-10">
                <div className="flex items-center gap-0.75 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5" onMouseLeave={() => setHover(null)}>
                    {
                        Array.from({ length: 10 }).map((_, index) => {

                            const filled = typeof active === 'number' && active >= index

                            return (
                                <button className="size-4 sm:size-4.5 md:size-5 lg:size-3.5 xl:size-4.25 2xl:size-5 cursor-pointer" onMouseEnter={() => setHover(index)} onClick={() => setRating(index)} key={index}>
                                    {
                                        filled ?
                                            <FaStar className="size-full fill-yellow-400" />
                                            :
                                            < FaRegStar className="size-full fill-zinc-400 lg:fill-zinc-300" />
                                    }
                                </button>
                            )
                        })
                    }
                </div>
                <span className="w-10 sm:w-13 md:w-16 lg:w-12 xl:w-14 2xl:w-16 h-6 sm:h-7.5 md:h-9 lg:h-6 xl:h-7 2xl:h-8 flex items-center justify-center text-[8px] sm:text-[10px] md:text-xs lg:text-[8px] xl:text-[10px] 2xl:text-xs font-medium md:tracking-wide leading-none border rounded-full bg-zinc-50 dark:bg-zinc-900/40 lg:bg-zinc-950/50 border-zinc-300 dark:border-zinc-800 lg:border-zinc-900/50 text-zinc-700 dark:text-zinc-300 lg:text-zinc-200">{typeof active === 'number' ? active + 1 : 0} / 10</span>
            </div>
        </div>
    )
}