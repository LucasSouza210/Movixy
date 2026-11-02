import { useTranslate } from "../../../../../../../translations/Translations"

export default function Title({ title }: { title: string | undefined }) {

    const { line } = useTranslate()

    return (
        <p className="max-w-4/5 lg:max-w-none font-semibold text-lg sm:text-xl md:text-2xl lg:text-base xl:text-lg 2xl:text-xl leading-7 sm:leading-8 md:leading-9.5 lg:leading-6 xl:leading-7 2xl:leading-8 tracking-widest lg:tracking-wider xl:tracking-widest line-clamp-2 text-white">
            {
                title ?? line('unavailableTitle')
            }
        </p>
    )
}