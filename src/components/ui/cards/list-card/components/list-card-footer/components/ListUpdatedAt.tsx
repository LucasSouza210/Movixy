import { useFormattedDate } from "../../../../../../../hooks/useFormattedDate"
import { useTranslate } from "../../../../../../../translations/Translations"
import { LuHistory } from "react-icons/lu";

export default function ListUpdatedAt({ updatedAt }: { updatedAt: Date | null | undefined }) {

    const { line } = useTranslate()

    const formattedDate = useFormattedDate(updatedAt ? updatedAt.toISOString() : "", { short: true })

    const label = updatedAt === undefined ? line('updateInfoUnavailable') : updatedAt === null ? line('createdRecently') : `${line('updatedAt')} ${formattedDate}`

    return (
        <p className="flex items-center gap-1 text-xs font-medium tracking-wider text-zinc-500 dark:text-zinc-400">
            <LuHistory />
            {label}
        </p>
    )
}