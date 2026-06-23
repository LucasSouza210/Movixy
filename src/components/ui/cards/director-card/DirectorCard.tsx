import { FaStar, FaUserCircle } from "react-icons/fa";
import type { Director } from "../../../../types/tmdb";
import formatRate from "../../../../utils/tmdb/formatRate";

export default function DirectorCard({ director }: { director: Director }) {

    const medium = (director.movies.reduce((a, b) => a + b.vote_average, 0) / director.movies.length)

    return (
        <div className="w-full flex border border-default rounded-4xl sm:rounded-[39px] md:rounded-[46px] lg:rounded-4xl xl:rounded-[36px] 2xl:rounded-[40px] overflow-hidden bg-black">
            <div className="w-full h-60 sm:h-69 md:h-78 lg:h-54 2xl:h-74 flex items-center justify-between sm:justify-center p-8 sm:p-9 md:p-10 lg:p-6 xl:p-7 2xl:p-8 pl-0 sm:pl-0 md:pl-0 lg:pl-0 xl:pl-0 2xl:pl-0 bg-white dark:bg-zinc-950/70">
                <div className="size-full flex flex-col justify-center items-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-2.5 xl:gap-3 2xl:gap-3.5">
                    {
                        director.profile_path ?
                            <img src={`https://image.tmdb.org/t/p/w500${director.profile_path}`} alt={director.name} loading="lazy" decoding="async" draggable={false} className="h-3/6 aspect-square object-cover rounded-full" />
                            :
                            <FaUserCircle className="h-3/6 rounded-full fill-zinc-300 dark:fill-zinc-800" />
                    }
                    <div className="flex flex-col items-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.25 xl:gap-1.5 2xl:gap-1.75">
                        <p className="max-w-26 text-center font-medium text-sm sm:text-[15px] md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm tracking-wider leading-5 sm:leading-5.5 md:leading-6 lg:leading-4 xl:leading-4.5 2xl:leading-5 text-black dark:text-white">{director.name}</p>
                        <span className="flex items-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-0.75 xl:gap-1 2xl:gap-1.25 font-medium text-xs sm:text-[13px] md:text-sm lg:text-[10px] xl:text-[11px] 2xl:text-xs tracking-wide text-zinc-600 dark:text-zinc-300">
                            <FaStar className="size-2.5 sm:size-2.75 md:size-3 lg:size-2 xl:size-2.25 2xl:size-2.5 fill-yellow-300" />
                            <p className="leading-none">
                                {formatRate(medium)}
                            </p>
                        </span>
                    </div>
                </div>
                <div className="h-full w-fit grid grid-cols-2 grid-rows-2 border border-default rounded-2xl sm:rounded-[20px] md:rounded-3xl lg:rounded-2xl xl:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shrink-0">
                    {
                        director.movies.slice(0, 4).map((i, index) => (
                            <img src={`https://image.tmdb.org/t/p/original${i.poster_path}`} alt="" className="h-full object-cover" key={index} />
                        ))
                    }
                </div>
            </div>
        </div>

    )
}