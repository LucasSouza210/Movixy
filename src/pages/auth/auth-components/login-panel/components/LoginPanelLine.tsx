import { useTranslate } from "../../../../../translations/Translations"

export default function LoginPanelLine() {

    const { line } = useTranslate()

    return (
        <div className="w-full flex items-center gap-3 sm:gap-3.25 md:gap-3.5 lg:gap-3 xl:gap-3.25 2xl:gap-3.5 before:flex-1 before:h-px after:flex-1 after:h-px before:bg-zinc-300 dark:before:bg-zinc-800 after:bg-zinc-300 dark:after:bg-zinc-800">
            <p className="text-base sm:text-[17px] md:text-lg lg:text-sm xl:text-[15px] 2xl:text-base font-medium tracking-wider leading-none text-zinc-500 dark:text-zinc-400">
                {line('orDivider')}
            </p>
        </div>
    )
}