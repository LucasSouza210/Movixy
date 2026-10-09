import { useTranslate } from "../../../../../../../translations/Translations"

export default function ChoiceDesc({ desc, fixed }: { desc: string | null, fixed: boolean }) {

    const { line } = useTranslate()

    return (
        <p className="text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider leading-5 sm:leading-5.75 md:leading-6.5 lg:leading-4 xl:leading-4.75 2xl:leading-5.5 line-clamp-2 text-default">
            {
                fixed ? line(desc ?? 'noDescription') : desc
            }
        </p>
    )
}