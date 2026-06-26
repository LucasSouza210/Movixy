import HorizontalScroll from "../../../../components/ui/scrolls/HorizontalScroll";
import { useTranslate } from "../../../../translations/Translations";
import type { CastMember } from "../../../../types/tmdb";
import CastCard from "../../../../components/ui/cards/cast-card/CastCard";

export default function MediaCast({ cast }: { cast: CastMember[] | undefined }) {

    const { line } = useTranslate()

    return (
        <div className="w-full flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6">
            <p className="font-medium text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl tracking-wider md:tracking-widest lg:tracking-wider leading-none text-black dark:text-white">{line('mediaCast')}</p>
            <HorizontalScroll className="w-full pb-3 sm:pb-4 md:pb-5 lg:pb-3 xl:pb-4 2xl:pb-5" itemsPerView={[3, 3, 3, 6]} gapPerBreakpoint={[4, 5, 6, 4, 5, 6]} scrollBarHeight={[2, 2.25, 2.5, 2, 2.25, 2.5]}>
                {
                    cast?.map((i, index) => (
                        <CastCard actor={i} key={index} />
                    ))
                }
            </HorizontalScroll>
        </div>
    )
}