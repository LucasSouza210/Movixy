import { useTranslate } from "../../../../../../../../../translations/Translations"

export default function BirthPlace({ place, compact }: { place: string | undefined, compact?: boolean }) {

    const { line } = useTranslate()

    return (
        <p className={`font-medium tracking-wider line-clamp-1 text-default ${compact ? 'text-[10px] sm:text-xs md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm' : 'text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm'}`}>
            {
                place ?? line('unavailable')
            }
        </p>
    )
}