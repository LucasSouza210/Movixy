import useFormattedRate from "../../../../../../hooks/useFormattedRate"

export default function EpisodeItem({ number, rate }: { number: number, rate: number }) {

const formatRate = useFormattedRate

    return (
        <div className="w-full flex flex-col items-center gap-2 shrink-0">
            <span className="w-full h-8 flex items-center justify-center font-medium text-xs tracking-wide leading-none rounded-t-xl bg-orange-500 dark:text-white">{formatRate(rate)}</span>
            <p className="font-medium text-sm tracking-wider leading-none text-zinc-700 dark:text-zinc-300">E{number}</p>
        </div>
    )
}