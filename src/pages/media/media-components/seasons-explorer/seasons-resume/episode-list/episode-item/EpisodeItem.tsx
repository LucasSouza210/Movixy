import SelectEpisode from "./SelectEpisode";

export default function EpisodeItem({ number, rate, release }: { number: number, rate: number, release: string | undefined }) {
    return (
        <div className="w-full flex flex-col items-center gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-2.5 xl:gap-3 2xl:gap-3.5 shrink-0">
            <SelectEpisode number={number} rate={rate} release={release} />
            <p className="font-medium text-sm sm:text-[15px] md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm tracking-wider leading-none text-zinc-500 dark:text-zinc-400">E{number}</p>
        </div>
    )
}