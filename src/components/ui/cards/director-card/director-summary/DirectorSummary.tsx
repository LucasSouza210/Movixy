import type { Director } from "../../../../../types/tmdb";
import formatRate from "../../../../../utils/tmdb/formatRate";
import DirectorAvatar from "./DirectorAvatar";
import DirectorAverageRate from "./DirectorAverageRate";

export default function DirectorSummary({ director }: { director: Director }) {

    const medium = (director.movies.reduce((a, b) => a + b.vote_average, 0) / director.movies.length)

    return (
        <div className="size-full flex flex-col justify-center items-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-2.5 xl:gap-3 2xl:gap-3.5">
            <DirectorAvatar path={director.profile_path} name={director.name} />
            <div className="flex flex-col items-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.25 xl:gap-1.5 2xl:gap-1.75">
                <p className="max-w-26 text-center font-medium text-sm sm:text-[15px] md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm tracking-wider leading-5 sm:leading-5.5 md:leading-6 lg:leading-4 xl:leading-4.5 2xl:leading-5 text-black dark:text-white">{director.name}</p>
                <DirectorAverageRate rate={formatRate(medium)}/>
            </div>
        </div>
    )
}