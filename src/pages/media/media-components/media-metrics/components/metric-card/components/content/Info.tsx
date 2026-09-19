import { useTranslate } from "../../../../../../../../translations/Translations"

export default function Info({ info }: { info: string | number | undefined | null }) {

    const { line } = useTranslate()

    return (
        <p className="font-semibold text-base sm:text-lg md:text-xl lg:text-xs xl:text-sm 2xl:text-base tracking-wider leading-5.5 sm:leading-6.25 md:leading-7 lg:leading-4.5 xl:leading-5 2xl:leading-5.5 text-wrap wrap-break-word text-title">
            {info ?? line('notInformed')}
        </p>
    )
}