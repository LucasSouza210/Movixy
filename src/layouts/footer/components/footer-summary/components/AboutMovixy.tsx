import { useTranslate } from "../../../../../translations/Translations"

export default function AboutMovixy() {

    const { line } = useTranslate()

    return (
        <p className="text-base font-medium tracking-wide leading-5.5 text-zinc-500 dark:text-zinc-300">
            {line('aboutMovixy')}
        </p>
    )
}