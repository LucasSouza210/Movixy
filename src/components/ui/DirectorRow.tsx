import type { Director } from "../../types/tmdb";
import DirectorCard from "./cards/director-card/DirectorCard";

export default function DirectorRow({ list }: { list: Director[] }) {
    return (
        <div className="w-full grid grid-flow-col gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-7 2xl:gap-8 [--grid-gap:--spacing(4)] sm:[--grid-gap:--spacing(5)] md:[--grid-gap:--spacing(6)] lg:[--grid-gap:--spacing(6)] xl:[--grid-gap:--spacing(7)] 2xl:[--grid-gap:--spacing(8)] auto-cols-[100%] lg:auto-cols-[calc((100%-var(--grid-gap))/2)] overflow-x-auto pb-5 sm:pb-6 md:pb-7 lg:pb-4 xl:pb-5 2xl:pb-6 [&::-webkit-scrollbar]:h-2 sm:[&::-webkit-scrollbar]:h-2.5 md:[&::-webkit-scrollbar]:h-3 lg:[&::-webkit-scrollbar]:h-2 xl:[&::-webkit-scrollbar]:h-2.25 2xl:[&::-webkit-scrollbar]:h-2.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:cursor-pointer [&::-webkit-scrollbar-thumb]:bg-zinc-300 dark:[&::-webkit-scrollbar-thumb]:bg-zinc-800 [&::-webkit-scrollbar-thumb:hover]:bg-zinc-400 dark:[&::-webkit-scrollbar-thumb:hover]:bg-zinc-700">
            {
                list.map((i, index) => (
                    <DirectorCard director={i} key={index} />
                ))
            }
        </div>
    )
}