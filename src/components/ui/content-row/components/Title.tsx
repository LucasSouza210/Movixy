import { useTranslate } from "../../../../translations/Translations"

export default function Title({ title }: { title: string | undefined }) {

    const { line } = useTranslate()

    return (
        <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-base xl:text-lg 2xl:text-xl tracking-wider leading-none text-title">
            {line(title ?? 'notInformed')}
        </p>
    )
}