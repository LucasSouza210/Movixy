import HorizontalScroll from "../../../../../../components/ui/HorizontalScroll";
import type { Episode } from "../../../../../../types/tmdb";
import EpisodeItem from "./EpisodeItem";

export default function EpisodeList({ list }: { list: Episode[] | undefined }) {

    return (
        <div className="w-full flex flex-col overflow-hidden">
            <div className="w-full flex relative">
                <span className="w-max min-w-full h-px absolute z-10 top-8 sm:top-9 md:top-10 left-0 bg-zinc-300 dark:bg-zinc-700" />
                <HorizontalScroll className="w-full relative pb-3 sm:pb-3.5 md:pb-4" itemsPerView={[6]} gapPerBreakpoint={[3, 3.75, 4.5]} scrollBarHeight={[1.5, 1.75, 2]}>
                    {
                        list?.map((i, index) => (
                            <EpisodeItem number={i.episode_number} rate={i.vote_average} key={index} />
                        ))
                    }
                </HorizontalScroll>
            </div>
        </div>
    )
}