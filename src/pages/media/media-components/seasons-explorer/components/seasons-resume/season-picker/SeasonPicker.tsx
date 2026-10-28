import { useContext } from "react";
import { ExplorerContexts } from "../../../../../../../contexts/SeasonExplorerProvider";
import { useTranslate } from "../../../../../../../translations/Translations";
import type { Season } from "../../../../../../../types/tmdb";
import HorizontalScroll from "../../../../../../../components/ui/scrolls/HorizontalScroll";
import SeasonOption from "./SeasonOption";

const itemsPerView = [4, 4, 4, 8, 9, 10]
const gapPerBreakpoint = [2, 3, 4, 3, 3.5, 4]
const scrollBarHeight = [1, 1.25, 1.5, 1, 1.25, 1.5]

export default function SeasonPicker({ seasons }: { seasons: Season[] | undefined }) {

    const { selectedSeason } = useContext(ExplorerContexts)!

    const { line } = useTranslate()

    return (
        <div className="w-full h-12 sm:h-14 md:h-16 lg:h-12 xl:h-13 2xl:h-14 flex justify-between gap-6 sm:gap-7 md:gap-6 lg:gap-6 xl:gap-7 2xl:gap-8 border-b border-default">
            <p className="h-full flex items-center font-medium text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base tracking-wide leading-none text-zinc-400">{line('season')}</p>
            <HorizontalScroll className="w-full h-full" scrollToActive activeKey={selectedSeason} itemsPerView={itemsPerView} gapPerBreakpoint={gapPerBreakpoint} scrollBarHeight={scrollBarHeight}>
                {
                    seasons?.map((s, index) => (
                        <SeasonOption seasonNumber={s.season_number} key={index} />
                    ))
                }
            </HorizontalScroll>
        </div>
    )
}