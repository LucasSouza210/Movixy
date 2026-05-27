import HorizontalScroll from "../../../../components/ui/HorizontalScroll";
import { useTranslate } from "../../../../translations/Translations";
import type { CastMember } from "../../../../types/tmdb";
import { FaUserCircle } from "react-icons/fa";

export default function MediaCast({ cast }: { cast: CastMember[] | undefined }) {

    const { line } = useTranslate()

    return (
        <div className="w-full flex flex-col gap-4 sm:gap-5 md:gap-6">
            <p className="font-medium text-base sm:text-lg md:text-xl tracking-wider md:tracking-widest leading-none text-black dark:text-white">{line('mediaCast')}</p>
            <HorizontalScroll className="w-full pb-3 sm:pb-4 md:pb-5" itemsPerView={[3]} gapPerBreakpoint={[4, 5, 6]} scrollBarHeight={[2]}>
                {
                    cast?.filter(actor => actor.profile_path).slice(0, 10).map((i, index) => (
                        <div className="flex flex-col items-center gap-3 sm:gap-3.5 md:gap-4" key={index}>
                            {
                                i.profile_path ?
                                    <img src={`https://image.tmdb.org/t/p/w500${i.profile_path}`} alt={i.name} loading="lazy" decoding="async" draggable={false} className="w-full aspect-square object-cover rounded-full" />
                                    :
                                    <FaUserCircle className="size-full rounded-full fill-zinc-300 dark:fill-zinc-800" />
                            }
                            <div className="flex flex-col items-center gap-0.5">
                                <p className="text-center font-medium text-sm sm:text-base md:text-lg tracking-wider leading-4.5 sm:leading-5.25 md:leading-6 text-zinc-900 dark:text-zinc-100">{i.name}</p>
                                <p className="text-center font-medium text-xs sm:text-sm md:text-base tracking-wide leading-4 sm:leading-5 md:leading-6 text-zinc-600 dark:text-zinc-300">{i.character}</p>
                            </div>
                        </div>
                    ))
                }
            </HorizontalScroll>
        </div>
    )
}