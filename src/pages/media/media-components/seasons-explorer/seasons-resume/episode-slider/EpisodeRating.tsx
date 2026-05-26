import { useState } from "react";
import { useTranslate } from "../../../../../../translations/Translations";
import { FaMedal } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function EpisodeRating() {

    const [hover, setHover] = useState<number | null>(null)
    const [rating, setRating] = useState<number | null>(null)

    const { line } = useTranslate()

    const active = hover ?? rating

    return (
        <div className="w-full flex flex-col gap-2 sm:gap-2.5 md:gap-3 border-t p-6 sm:p-7 md:p-8 bg-transparent border-zinc-300 dark:border-zinc-800">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <FaMedal className="size-4 sm:size-5 md:size-6 fill-zinc-400" />
                <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-2">
                    <p className="text-xs sm:text-sm md:text-base font-medium tracking-wide leading-none text-zinc-800 dark:text-zinc-200">{line('userRatingTitle')}</p>
                    <p className="text-[10px] sm:text-xs md:text-sm font-medium tracking-wide leading-none text-zinc-500 dark:text-zinc-400">{line('userRatingSubtitle')}</p>
                </div>
            </div>
            <div className="flex items-center justify-between ml-6 sm:ml-8 md:ml-10">
                <div className="flex items-center gap-0.75 sm:gap-1.25 md:gap-1.5" onMouseLeave={() => setHover(null)}>
                    {
                        [...Array(10)].map((_, index) => {

                            const filled = typeof active === 'number' && active >= index

                            return (
                                <button className="size-4 sm:size-4.5 md:size-5 cursor-pointer" onMouseEnter={() => setHover(index)} onClick={() => setRating(index)}>
                                    {
                                        filled ?
                                            <FaStar className="size-full fill-yellow-400" />
                                            :
                                            < FaRegStar className="size-full fill-zinc-400" />
                                    }
                                </button>
                            )
                        })
                    }
                </div>
                <span className="w-10 sm:w-13 md:w-16 h-6 sm:h-7.5 md:h-9 flex items-center justify-center text-[8px] sm:text-[10px] md:text-xs font-medium md:tracking-wide leading-none border rounded-full bg-zinc-50 dark:bg-zinc-900/30 border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">{typeof active === 'number' ? active + 1 : 0} / 10</span>
            </div>
        </div>
    )
}