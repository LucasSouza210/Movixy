import { useTranslate } from "../../../../../../../translations/Translations"

export default function Name({ name }: { name: string }) {

    const { line } = useTranslate()

    return (
        <p className="w-full min-w-0 text-center font-medium text-sm sm:text-[17px] md:text-xl lg:text-sm xl:text-base 2xl:text-lg tracking-wider leading-5.5 sm:leading-7.5 md:leading-8.5 lg:leading-5.5 xl:leading-6.5 2xl:leading-7.5 line-clamp-2 wrap-anywhere text-title">
            {
                name ?? line('unavailableName')
            }
        </p>
    )
}