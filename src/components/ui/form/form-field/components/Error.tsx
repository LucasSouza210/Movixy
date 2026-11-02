import type { FieldError } from "react-hook-form";
import { useTranslate } from "../../../../../translations/Translations";

export default function Error({ error }: { error: FieldError }) {

    const { line } = useTranslate()

    return (
        <p className="text-xs sm:text-[13px] md:text-sm lg:text-[10px] xl:text-[11px] 2xl:text-xs font-medium tracking-wider text-red-500 dark:text-red-600">
            {line(error.message ?? 'notInformed')}
        </p>
    )
}