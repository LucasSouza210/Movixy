import { useTranslate } from "../../../../../../../translations/Translations"

export default function EmptyMessage() {

    const { line } = useTranslate()

    return (
        <p className="text-xs sm:text-[13px] md:text-sm lg:text-[10px] xl:text-[11px] 2xl:text-xs font-medium tracking-wider text-zinc-500 dark:text-zinc-300">
            {
                line('emptyListMessage')
            }
        </p>
    )
}