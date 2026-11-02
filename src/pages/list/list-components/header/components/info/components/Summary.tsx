import { useFormattedDate } from "../../../../../../../hooks/utils/useFormattedDate"
import { useTranslate } from "../../../../../../../translations/Translations"

export default function Summary({ length, created, change }: { length: number | undefined, created: string | undefined, change: string | undefined }) {

    const { line } = useTranslate()

    const formattedDate = useFormattedDate(change ? change : created, { short: true })

    const label = change === undefined ? line('updateInfoUnavailable') : change === null ? line('createdRecently') : `${line('updatedAt')} ${formattedDate}`

    const summary = `${length}/200 ${length != 1 ? line('items') : line('item')} • ${label}`

    return (
        <p className="text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wider leading-5.5 sm:leading-6.25 md:leading-7 lg:leading-normal text-default">
            {summary}
        </p>
    )
}