import { useTranslate } from "../../../translations/Translations"

export default function Copyright() {

    const { line } = useTranslate()

    return (
        <p className="text-xs sm:text-sm md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider leading-none text-zinc-400 dark:text-zinc-400">
            {line('copyright')} <a className="transition-all duration-300 ease-in-out cursor-pointer text-zinc-600 hover:text-orange-500 dark:text-zinc-100" href="https://github.com/LucasSouza210">Lucas Souza</a>.
        </p>
    )
}