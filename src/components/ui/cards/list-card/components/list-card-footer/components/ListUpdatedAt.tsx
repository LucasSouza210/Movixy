import { useFormattedDate } from "../../../../../../../hooks/useFormattedDate"
import { useTranslate } from "../../../../../../../translations/Translations"
import { LuHistory } from "react-icons/lu"

const editTolerance = 1000

export default function ListUpdatedAt({ createdAt, updatedAt }: { createdAt: string, updatedAt: string }) {

    const { line } = useTranslate()

    const edited = !!updatedAt && new Date(updatedAt).getTime() - new Date(createdAt).getTime() > editTolerance

    const formattedDate = useFormattedDate(edited ? updatedAt : createdAt, { short: true })

    return (
        <p className="flex items-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 text-xs sm:text-sm md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider text-default">
            <LuHistory />
            {line(edited ? 'updatedAt' : 'createdAt')} {formattedDate}
        </p>
    )
}