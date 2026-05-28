import HorizontalScroll from "../../../../../../components/ui/HorizontalScroll";
import { useTranslate } from "../../../../../../translations/Translations";
import type { Season } from "../../../../../../types/tmdb";
import SeasonOption from "./SeasonOption";

export default function SeasonPicker({ seasons }: { seasons: Season[] | undefined }) {


    const { line } = useTranslate()

    return (
        <div className="w-full h-12 sm:h-13 md:h-14 lg:h-12 xl:h-13 2xl:h-14 flex border-b border-zinc-200 dark:border-zinc-800">
            <p className="h-full flex items-center pr-4 sm:pr-5 md:pr-6 lg:pr-4 xl:pr-5 2xl:pr-6 font-medium text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base tracking-wide leading-none text-zinc-400">{line('season')}</p>
            <HorizontalScroll className="w-full" itemsPerView={[4, 4, 4, 8, 9, 10]} gapPerBreakpoint={[2, 3, 4, 3, 3.5, 4]} scrollBarHeight={[1, 1.25, 1.5, 1, 1.25, 1.5]}>
                {
                    seasons?.filter(season => season.season_number > 0).map((s, index) => (
                        <SeasonOption seasonNumber={s.season_number} key={index} />
                    ))
                }
            </HorizontalScroll>
        </div>
    )
}