import type { Actor } from "../../pages/home/home-components/popular-actors/PopularActors";
import ActorCard from "./ActorCard";

export default function ActorRow({ content }: { content: Actor[] }) {
    return (
        <div className="w-full grid grid-flow-col gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6 [--grid-gap:--spacing(4)] sm:[--grid-gap:--spacing(5)] md:[--grid-gap:--spacing(6)] lg:[--grid-gap:--spacing(4)] xl:[--grid-gap:--spacing(5)] 2xl:[--grid-gap:--spacing(6)] auto-cols-[calc((100%-var(--grid-gap))/2)] lg:auto-cols-[calc((100%-4*var(--grid-gap))/5)] overflow-x-auto pb-4 sm:pb-5 md:pb-6 lg:pb-3 xl:pb-4 2xl:pb-5 [&::-webkit-scrollbar]:h-2 sm:[&::-webkit-scrollbar]:h-2.5 md:[&::-webkit-scrollbar]:h-3 lg:[&::-webkit-scrollbar]:h-2 xl:[&::-webkit-scrollbar]:h-2.25 2xl:[&::-webkit-scrollbar]:h-2.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:cursor-pointer [&::-webkit-scrollbar-thumb]:bg-zinc-300 dark:[&::-webkit-scrollbar-thumb]:bg-zinc-800 [&::-webkit-scrollbar-thumb:hover]:bg-zinc-400 dark:[&::-webkit-scrollbar-thumb:hover]:bg-zinc-700">
            {
                content?.map((i, index) => (
                    <ActorCard actor={i} key={index} />
                ))
            }
        </div>
    )
}