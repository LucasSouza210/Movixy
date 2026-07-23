import { useTranslate } from "../../../../../translations/Translations"


export default function WeeklyMovieBadge() {

    const { line } = useTranslate()

    return (
        <span className="py-3 px-4 text-xs font-bold tracking-wider leading-none rounded-full border-2 absolute right-6 2xl:right-8 top-6 2xl:top-8 backdrop-blur-xs bg-black/30 border-zinc-400/50 text-zinc-300">
            {line('movieOfTheWeek')}
        </span>
    )
}