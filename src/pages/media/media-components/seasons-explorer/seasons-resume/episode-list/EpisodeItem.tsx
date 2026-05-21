import useFormattedRate from "../../../../../../hooks/useFormattedRate"

export default function EpisodeItem({ number, rate, selected, setSelected }: { number: number, rate: number, selected: number, setSelected: React.Dispatch<React.SetStateAction<number>> }) {

    const formatRate = useFormattedRate

    return (
        <div className="w-full flex flex-col items-center gap-2 shrink-0">
            <button className={`${selected == number ? 'border-transparent bg-orange-500 text-white' : 'cursor-pointer bg-zinc-50 hover:bg-white dark:bg-zinc-900 dark:hover:bg-zinc-800 border-zinc-200 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700 text-zinc-500 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-100'} w-full h-8 flex items-center justify-center font-medium text-xs tracking-wide leading-none rounded-t-xl border-t border-x transition-all duration-300 ease-in-out`} onClick={() => {
                selected !== number && setSelected(number)
            }}>
                {formatRate(rate)}
            </button>
            <p className="font-medium text-sm tracking-wider leading-none text-zinc-500 dark:text-zinc-400">E{number}</p>
        </div>
    )
}