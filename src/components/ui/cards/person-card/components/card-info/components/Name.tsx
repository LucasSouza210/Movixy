import { useTranslate } from "../../../../../../../translations/Translations"

export default function Name({ name }: { name: string }) {

    const { line } = useTranslate()

    return (
        <p className="w-fit text-center font-medium text-sm sm:text-[17px] md:text-xl lg:text-sm xl:text-base 2xl:text-lg tracking-wider leading-6 sm:leading-7.15 md:leading-8.5 lg:leading-6 xl:leading-6.75 2xl:leading-7.5 line-clamp-2 text-title">
            {
                name ?? line('unavailableName')
            }
        </p>
    )
}