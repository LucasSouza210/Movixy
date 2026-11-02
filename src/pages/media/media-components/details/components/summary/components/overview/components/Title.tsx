import { useTranslate } from "../../../../../../../../../translations/Translations"

export default function Title() {

    const { line } = useTranslate()

    return (
        <p className="font-medium text-base sm:text-lg md:text-xl lg:text-sm xl:text-base 2xl:text-lg tracking-wider md:tracking-widest lg:tracking-wider leading-none text-title">
            {
                line('mediaOverview')
            }
        </p>
    )
}