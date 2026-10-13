import { useTranslate } from "../../../../../../../../../translations/Translations"

export default function Name({ name }: { name: string | undefined }) {

    const { line } = useTranslate()

    return (
        <p className="text-center font-medium text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base tracking-wider leading-5.5 sm:leading-5.75 md:leading-7 lg:leading-4.5 xl:leading-5.25 2xl:leading-6 line-clamp-2 text-title">
            {name ?? line('unavailable')}
        </p>
    )
}