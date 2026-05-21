import { useState } from "react";
import type { Episode } from "../../../../../../types/tmdb";
import EpisodeItem from "./EpisodeItem";

export default function EpisodeList({ list }: { list: Episode[] | undefined }) {

    const [selectedEp, setSelectedEp] = useState(1)

    return (
        <div className="w-full flex flex-col overflow-hidden">
            <div className="w-full flex relative">
                <span className="w-max min-w-full h-px absolute z-10 top-8 left-0 bg-zinc-300 dark:bg-zinc-700" />
                <div className="w-full grid grid-flow-col relative auto-cols-[calc((100%-3.75rem)/6)] [--grid-gap:--spacing(6)] gap-3 overflow-x-auto pb-3 [&::-webkit-scrollbar]:h-1.5 sm:[&::-webkit-scrollbar]:h-2.5 md:[&::-webkit-scrollbar]:h-3 lg:[&::-webkit-scrollbar]:h-2 xl:[&::-webkit-scrollbar]:h-2.25 2xl:[&::-webkit-scrollbar]:h-2.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:cursor-pointer [&::-webkit-scrollbar-thumb]:bg-zinc-300 dark:[&::-webkit-scrollbar-thumb]:bg-zinc-800 [&::-webkit-scrollbar-thumb:hover]:bg-zinc-400 dark:[&::-webkit-scrollbar-thumb:hover]:bg-zinc-700">
                    {
                        list?.map((i, index) => (
                            <EpisodeItem number={i.episode_number} rate={i.vote_average} selected={selectedEp} setSelected={setSelectedEp} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}