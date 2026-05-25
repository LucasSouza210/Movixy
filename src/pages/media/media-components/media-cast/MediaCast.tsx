import HorizontalScroll from "../../../../components/ui/HorizontalScroll";
import { useTranslate } from "../../../../translations/Translations";
import type { CastMember } from "../../../../types/tmdb";
import { FaUserCircle } from "react-icons/fa";

export default function MediaCast({ cast }: { cast: CastMember[] | undefined }) {

    const { line } = useTranslate()

    return (
        <div className="w-full flex flex-col gap-4">
            <p className="font-medium text-base tracking-wider leading-none text-black dark:text-white">{line('mediaCast')}</p>
            <HorizontalScroll className="w-full pb-4" itemsPerView={[3]} gapPerBreakpoint={[4]} scrollBarHeight={[2]}>
                {
                    cast?.filter(actor => actor.profile_path).slice(0, 10).map((i, index) => (
                        <div className="flex flex-col items-center gap-3" key={index}>
                            {
                                i.profile_path ?
                                    <img src={`https://image.tmdb.org/t/p/w500${i.profile_path}`} alt={i.name} loading="lazy" decoding="async" draggable={false} className="w-full aspect-square object-cover rounded-full" />
                                    :
                                    <FaUserCircle className="size-full rounded-full fill-zinc-300 dark:fill-zinc-800" />
                            }
                            <div className="flex flex-col items-center gap-0.5">
                                <p className="text-center font-medium text-sm tracking-wider leading-5 text-zinc-900 dark:text-zinc-100">{i.name}</p>
                                <p className="text-center font-medium text-xs tracking-wide leading-4 text-zinc-600 dark:text-zinc-300">{i.character}</p>
                            </div>
                        </div>
                    ))
                }
            </HorizontalScroll>
        </div>
    )
}