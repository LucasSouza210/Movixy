import { useTranslate } from "../../../../../../translations/Translations"

export default function FormFieldTitle({ title }: { title: string }) {

    const { line } = useTranslate()

    return (
        <p className="text-sm sm:text-[15px] md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider text-zinc-700 dark:text-zinc-300">
            {line(title)}
        </p>
    )
}