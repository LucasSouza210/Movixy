import { useTranslate } from "../../../../../../../translations/Translations"

export default function Title() {

    const { line } = useTranslate()

    return (
        <p className="text-base sm:text-lg md:text-xl lg:text-xs xl:text-sm 2xl:text-base font-semibold tracking-wider 2xl:tracking-widest leading-none text-black dark:text-white">
            {line('personProjects')}
        </p>
    )
}