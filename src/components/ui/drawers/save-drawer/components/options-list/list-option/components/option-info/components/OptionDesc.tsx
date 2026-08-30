import { useTranslate } from "../../../../../../../../../../translations/Translations"

export default function OptionDesc({ desc, fixed }: { desc: string | null, fixed: boolean }) {

    const { line } = useTranslate()

    return (
        <p className="text-xs font-medium tracking-wider leading-4.5 line-clamp-2 text-zinc-500">
            {
                fixed ? line(desc ?? 'noDescription') : desc
            }
        </p>
    )
}