import { useNavigate } from "react-router-dom";
import HorizontalScroll from "../../../../components/ui/scrolls/HorizontalScroll";
import { useTranslate } from "../../../../translations/Translations";
import type { CastMember } from "../../../../types/tmdb";
import { FaUserCircle } from "react-icons/fa";

export default function MediaCast({ cast }: { cast: CastMember[] | undefined }) {

    const { line } = useTranslate()

    const navigate = useNavigate()

    return (
        <div className="w-full flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6">
            <p className="font-medium text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl tracking-wider md:tracking-widest lg:tracking-wider leading-none text-black dark:text-white">{line('mediaCast')}</p>
            <HorizontalScroll className="w-full pb-3 sm:pb-4 md:pb-5 lg:pb-2 xl:pb-3 2xl:pb-4" itemsPerView={[3, 3, 3, 6]} gapPerBreakpoint={[4, 5, 6, 4, 5, 6]} scrollBarHeight={[2, 2.25, 2.5, 2, 2.25, 2.5]}>
                {
                    cast?.filter(actor => actor.profile_path).slice(0, 10).map((i, index) => (
                        <div className="flex flex-col items-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-2 xl:gap-3 2xl:gap-4" key={index} onClick={() => navigate(`/actor/${i.id}`)}>
                            {
                                i.profile_path ?
                                    <img src={`https://image.tmdb.org/t/p/w500${i.profile_path}`} alt={i.name} loading="lazy" decoding="async" draggable={false} className="w-full aspect-square object-cover rounded-full" />
                                    :
                                    <FaUserCircle className="size-full rounded-full fill-zinc-300 dark:fill-zinc-800" />
                            }
                            <div className="flex flex-col items-center gap-px lg:gap-0.5 xl:gap-0.75">
                                <p className="text-center font-medium text-sm sm:text-base md:text-lg lg:text-sm xl:text-base 2xl:text-lg tracking-wider leading-4.5 sm:leading-5.25 md:leading-6 lg:leading-4.5 xl:leading-5 2xl:leading-6 text-zinc-900 dark:text-zinc-100">{i.name}</p>
                                <p className="text-center font-medium text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base tracking-wide leading-4 sm:leading-5 md:leading-6 lg:leading-4 xl:leading-4.75 2xl:leading-5.5 text-zinc-600 dark:text-zinc-300">{i.character}</p>
                            </div>
                        </div>
                    ))
                }
            </HorizontalScroll>
        </div>
    )
}