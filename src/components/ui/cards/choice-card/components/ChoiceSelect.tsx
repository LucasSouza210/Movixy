
export default function ChoiceSelect({ selected }: { selected: boolean }) {
    return (
        <span className={`size-6 sm:size-7 md:size-8 lg:size-5 xl:size-5.5 2xl:size-6 flex shrink-0 rounded-full border-2 p-0.75 transition-all duration-200 ease-in-out bg-elevated ${selected ? 'border-zinc-400/50 dark:border-zinc-600/50' : 'border-default'}`}>
            {
                selected &&
                <span className="size-full rounded-full bg-zinc-400/50 dark:bg-zinc-600/50" />
            }
        </span>
    )
}