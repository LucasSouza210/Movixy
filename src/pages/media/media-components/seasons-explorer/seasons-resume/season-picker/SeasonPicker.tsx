import HorizontalScroll from "../../../../../../components/ui/HorizontalScroll";
import { useTranslate } from "../../../../../../translations/Translations";
import type { Season } from "../../../../../../types/tmdb";
import SeasonOption from "./SeasonOption";

export default function SeasonPicker({ seasons }: { seasons: Season[] | undefined }) {


    const { line } = useTranslate()

    return (
        <div className="w-full h-12 sm:h-13 md:h-14 lg:h-12 flex border-b border-zinc-200 dark:border-zinc-800">
            <p className="h-full flex items-center pr-4 sm:pr-5 md:pr-6 lg:pr-4 font-medium text-xs sm:text-sm md:text-base lg:text-xs tracking-wide leading-none text-zinc-400">{line('season')}</p>
            <HorizontalScroll className="w-full" itemsPerView={[4, 4, 4, 8]} gapPerBreakpoint={[2, 3, 4, 3]} scrollBarHeight={[1, 1.25, 1.5, 1]}>
                {
                    seasons?.filter(season => season.season_number > 0).map((s, index) => (
                        <SeasonOption seasonNumber={s.season_number} key={index} />
                    ))
                }
            </HorizontalScroll>
        </div>
    )
}