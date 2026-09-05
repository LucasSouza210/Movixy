import HorizontalScroll from "../../../../../../components/ui/scrolls/HorizontalScroll";
import type { Episode } from "../../../../../../types/tmdb";
import EpisodeItem from "./episode-item/EpisodeItem";

const itemsPerView = [6, 6, 7, 12, 13, 14]
const gapPerBreakpoint = [3, 3.5, 4, 2.5, 3, 3.5]

export default function EpisodeList({ list }: { list: Episode[] | undefined }) {
    return (
        <div className="w-full flex flex-col overflow-hidden">
            <div className="w-full flex relative">
                <span className="w-max min-w-full h-px absolute z-10 top-10 sm:top-11 md:top-12 lg:top-10 xl:top-11 2xl:top-12 left-0 bg-zinc-300 dark:bg-zinc-700" />
                <HorizontalScroll className="w-full relative pb-3 sm:pb-3.5 md:pb-4 lg:pb-3 xl:pb-3.5 2xl:pb-4" itemsPerView={itemsPerView} gapPerBreakpoint={gapPerBreakpoint} scrollBarHeight={[1.5, 1.75, 2, 1.5, 1.75, 2]}>
                    {
                        list?.map((i, index) => (
                            <EpisodeItem number={i.episode_number} rate={i.vote_average} release={i.air_date} key={index} />
                        ))
                    }
                </HorizontalScroll>
            </div>
        </div>
    )
}