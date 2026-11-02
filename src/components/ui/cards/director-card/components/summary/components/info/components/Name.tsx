import { useTranslate } from "../../../../../../../../../translations/Translations"

export default function Name({ name, compact }: { name: string | undefined, compact?: boolean }) {

    const { line } = useTranslate()

    return (
        <p className={`font-medium tracking-wider line-clamp-1 text-title ${compact ? 'text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base' : 'text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base'}`}>
            {name ?? line('unavailable')}
        </p>
    )
}