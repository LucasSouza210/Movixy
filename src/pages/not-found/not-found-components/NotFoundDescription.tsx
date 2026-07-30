import { useTranslate } from "../../../translations/Translations"

export default function NotFoundDescription() {

    const { line } = useTranslate()

    return (
        <p className="lg:max-w-3/5 text-center text-base sm:text-base md:text-xl lg:text-sm xl:text-[15px] 2xl:text-base font-medium tracking-wider leading-6.5 sm:leading-7.25 md:leading-8 lg:leading-5.5 xl:leading-6 2xl:leading-6.5 text-zinc-600 dark:text-zinc-400">
            {line('pageNotFoundDescription')}
        </p>
    )
}