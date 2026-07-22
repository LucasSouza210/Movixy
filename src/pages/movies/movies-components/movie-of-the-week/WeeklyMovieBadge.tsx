import { useTranslate } from "../../../../translations/Translations"

export default function WeeklyMovieBadge() {

    const { line } = useTranslate()

    return (
        <span className="py-3 px-4 text-xs font-bold tracking-widest leading-none rounded-full border-2 absolute right-4 top-4 backdrop-blur-xs bg-black/40 border-zinc-400/60 text-zinc-300">
            {line('movieOfTheWeek')}
        </span>
    )
}