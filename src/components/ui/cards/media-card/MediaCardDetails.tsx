import { useFormattedDate } from "../../../../hooks/useFormattedDate";
import type { ActorCredit, Media } from "../../../../types/tmdb";

export default function MediaCardDetails({ media, onlyYear }: { media: Media | ActorCredit, onlyYear?: boolean }) {

    const isMovie = media.media_type == 'movie'

    return (
        <div className="flex flex-col gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-0.5 xl:gap-0.75 2xl:gap-1">
            <p className="text-base sm:text-lg md:text-xl lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wider md:tracking-widest leading-5.5 sm:leading-6.5 md:leading-7.5 lg:leading-4.5 xl:leading-5.25 2xl:leading-6 text-zinc-800 dark:text-zinc-200">
                {isMovie ? media.title : media.name} {onlyYear && <span className="text-sm sm:text-base md:text-lg lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wide md:tracking-widest leading-4.5 sm:leading-5.5 md:leading-6.5 lg:leading-4 xl:leading-4.5 2xl:leading-5 text-zinc-500 dark:text-zinc-400">({media[isMovie ? "release_date" : "first_air_date"]?.split("-")[0]})</span>}
            </p>
            {
                !onlyYear && <p className="font-medium text-sm sm:text-base md:text-lg lg:text-[10px] xl:text-xs 2xl:text-sm tracking-wide leading-5.5 sm:leading-6.25 md:leading-7 lg:leading-4 xl:leading-5 2xl:leading-6 text-zinc-500 dark:text-zinc-400">{useFormattedDate(isMovie ? media.release_date : media.first_air_date)}</p>
            }
        </div>
    )
}