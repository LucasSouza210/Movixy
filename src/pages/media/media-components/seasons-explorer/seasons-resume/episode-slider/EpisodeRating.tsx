import { useTranslate } from "../../../../../../translations/Translations";
import { FaMedal } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export default function EpisodeRating() {

    const { line } = useTranslate()

    return (
        <div className="w-full flex flex-col gap-2 border-t p-6 bg-transparent border-zinc-300 dark:border-zinc-800">
            <div className="flex items-center gap-2">
                <FaMedal className="size-4 row-span-2 fill-zinc-400" />
                <div className="flex flex-col gap-1">
                    <p className="text-xs font-medium tracking-wide leading-none text-zinc-800 dark:text-zinc-200">{line('userRatingTitle')}</p>
                    <p className="text-[10px] font-medium tracking-wide leading-none text-zinc-500 dark:text-zinc-400">{line('userRatingSubtitle')}</p>
                </div>
            </div>
            <div className="flex items-center gap-4 ml-6">
                <div className="flex items-center gap-1">
                    {
                        [...Array(10)].map((_, index) => (
                            <FaRegStar className="size-3.5 fill-zinc-400" key={index} />
                        ))
                    }
                </div>
                <span className="items-center text-[10px] font-medium tracking-wide leading-none border rounded-full px-3 py-2 bg-zinc-50 dark:bg-zinc-900/30 border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">0 / 10</span>
            </div>
        </div>
    )
}