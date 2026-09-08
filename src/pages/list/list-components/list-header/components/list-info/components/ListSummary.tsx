import { useFormattedDate } from "../../../../../../../hooks/useFormattedDate"
import { useTranslate } from "../../../../../../../translations/Translations"

export default function ListSummary({ length, created, change }: { length: number | undefined, created: string | undefined, change: string | undefined }) {

    const { line } = useTranslate()

    const formattedDate = useFormattedDate(change ? change : created, { short: true })

    const label = change === undefined ? line('updateInfoUnavailable') : change === null ? line('createdRecently') : `${line('updatedAt')} ${formattedDate}`

    const summary = `${length} ${length != 1 ? line('items') : line('item')} • ${label}`

    return (
        <p className="text-sm font-medium tracking-wider text-zinc-500 dark:text-zinc-300">
            {summary}
        </p>
    )
}