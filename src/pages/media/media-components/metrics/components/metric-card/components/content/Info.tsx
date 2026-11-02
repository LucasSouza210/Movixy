import { useTranslate } from "../../../../../../../../translations/Translations"

export default function Info({ info }: { info: string | number | undefined | null }) {

    const { line } = useTranslate()

    return (
        <p className="font-semibold text-lg sm:text-xl md:text-[22px] lg:text-sm xl:text-base 2xl:text-lg tracking-wider leading-7.5 sm:leading-8.25 md:leading-9 lg:leading-6 xl:leading-6.75 2xl:leading-7.5 text-wrap wrap-break-word text-title">
            {info ?? line('notInformed')}
        </p>
    )
}