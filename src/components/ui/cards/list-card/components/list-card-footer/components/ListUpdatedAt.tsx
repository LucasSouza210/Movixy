import { useFormattedDate } from "../../../../../../../hooks/useFormattedDate"
import { useTranslate } from "../../../../../../../translations/Translations"
import { LuHistory } from "react-icons/lu";

export default function ListUpdatedAt({ updatedAt }: { updatedAt: string}) {

    const { line } = useTranslate()

    const formattedDate = useFormattedDate(updatedAt ? updatedAt : "", { short: true })

    const label = updatedAt === undefined ? line('updateInfoUnavailable') : updatedAt === null ? line('createdRecently') : `${line('updatedAt')} ${formattedDate}`

    return (
        <p className="flex items-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 text-xs sm:text-sm md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider text-zinc-500 dark:text-zinc-400">
            <LuHistory />
            {label}
        </p>
    )
}