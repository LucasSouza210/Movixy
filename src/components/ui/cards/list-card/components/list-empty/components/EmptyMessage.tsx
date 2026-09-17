import { useTranslate } from "../../../../../../../translations/Translations"

export default function EmptyMessage() {

    const { line } = useTranslate()

    return (
        <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed rounded-2xl sm:rounded-[18px] md:rounded-[20px] lg:rounded-2xl xl:rounded-[18px] 2xl:rounded-[20px] border-default bg-zinc-50 dark:bg-zinc-900/20">
            <p className="max-w-3/4 text-center text-xs sm:text-sm md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider leading-5 sm:leading-5.75 md:leading-6.5 lg:leading-5 xl:leading-5.5 2xl:leading-6 text-zinc-500 dark:text-zinc-300">
                {
                    line('emptyListMessage')
                }
            </p>
        </div>
    )
}