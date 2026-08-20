import { useTranslate } from "../../../../../translations/Translations"

export default function CastCardInfo({ name, character }: { name: string, character: string }) {

    const { line } = useTranslate()

    return (
        <div className="flex flex-col items-center gap-px md:gap-0.5 lg:gap-0.5 2xl:gap-0.75">
            <p className="text-center font-medium text-sm sm:text-base md:text-lg lg:text-sm xl:text-base 2xl:text-lg tracking-wider leading-5.5 sm:leading-6.5 md:leading-7.5 lg:leading-5.5 xl:leading-6.25 2xl:leading-7 line-clamp-2 text-zinc-900 dark:text-zinc-100">{name ?? line('unknown')}</p>
            <p className="text-center font-medium text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base tracking-wide leading-5 sm:leading-6 md:leading-7 lg:leading-5 xl:leading-5.75 2xl:leading-6.5 line-clamp-2 text-zinc-600 dark:text-zinc-300">{character ?? line('unknown')}</p>
        </div>
    )
}