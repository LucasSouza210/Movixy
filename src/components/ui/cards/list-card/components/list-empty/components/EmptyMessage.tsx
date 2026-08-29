import { useTranslate } from "../../../../../../../translations/Translations"

export default function EmptyMessage() {

    const { line } = useTranslate()

    return (
        <p className="max-w-3/4 text-center text-xs sm:text-sm md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider leading-5 sm:leading-5.75 md:leading-6.5 lg:leading-5 xl:leading-5.5 2xl:leading-6 text-zinc-500 dark:text-zinc-300">
            {
                line('emptyListMessage')
            }
        </p>
    )
}