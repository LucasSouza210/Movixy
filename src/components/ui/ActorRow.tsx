import type { Actor } from "../../types/tmdb";
import ActorCard from "./cards/actor-card/ActorCard";
import HorizontalScroll from "./HorizontalScroll";

export default function ActorRow({ content }: { content: Actor[] }) {
    return (
        <HorizontalScroll className="w-full pb-4 sm:pb-5 md:pb-6 lg:pb-4 xl:pb-5 2xl:pb-6" itemsPerView={[3, 3, 3, 5]} gapPerBreakpoint={[5, 6, 7, 4, 5, 6]} scrollBarHeight={[2, 2.5, 3, 2, 2.25, 2.5]}>
            {
                content?.map((i, index) => (
                    <ActorCard actor={i} key={index} />
                ))
            }
        </HorizontalScroll>
    )
}