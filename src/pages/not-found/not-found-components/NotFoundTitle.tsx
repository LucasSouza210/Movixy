import { useTranslate } from "../../../translations/Translations"

export default function NotFoundTitle({title}: {title?: string}) {

    const { line } = useTranslate()

    return (
        <p className="text-xl sm:text-[23px] md:text-[26px] lg:text-lg xl:text-[19px] 2xl:text-xl font-medium tracking-wider leading-none text-zinc-700 dark:text-white">
            {line(title ?? 'notFound')}
        </p>
    )
}