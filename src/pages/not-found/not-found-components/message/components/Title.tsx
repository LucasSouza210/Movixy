import { useTranslate } from "../../../../../translations/Translations"

export default function Title({ title }: { title?: string }) {

    const { line } = useTranslate()

    return (
        <p className="text-xl sm:text-[23px] md:text-[26px] lg:text-lg xl:text-xl 2xl:text-[22px] font-medium tracking-wider leading-none text-title">
            {line(title ?? 'notFound')}
        </p>
    )
}