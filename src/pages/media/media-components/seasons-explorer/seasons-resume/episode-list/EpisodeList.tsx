import type { Episode } from "../../../../../../types/tmdb";
import EpisodeItem from "./EpisodeItem";

export default function EpisodeList({ list }: { list: Episode[] | undefined }) {
    return (
        <div className="w-full flex flex-col overflow-hidden">
            <div className="w-full grid grid-flow-col auto-cols-[calc((100%-3.75rem)/6)] [--grid-gap:--spacing(6)] gap-3 overflow-x-auto pb-3">
                {
                    list?.map((i, index) => (
                        <EpisodeItem number={i.episode_number} rate={i.vote_average} key={index} />
                    ))
                }
            </div>
        </div>
    )
}