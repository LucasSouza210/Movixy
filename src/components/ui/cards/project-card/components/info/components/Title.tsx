import { useTranslate } from "../../../../../../../translations/Translations"

export default function Title({ title }: { title: string | undefined }) {

    const { line } = useTranslate()

    return (
        <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg font-medium tracking-wider  line-clamp-1 text-zinc-800 dark:text-zinc-200">
            {
                title ?? line('unavailableTitle')
            }
        </p>
    )
}