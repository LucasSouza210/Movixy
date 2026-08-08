import { format, parseISO } from "date-fns"
import { ptBR, enUS, es } from "date-fns/locale"
import useLang from "./useLang"

const locales = {
    pt: ptBR,
    en: enUS,
    es: es
}

const formats = {
    pt: "dd 'de' MMMM 'de' yyyy",
    es: "dd 'de' MMMM 'de' yyyy",
    en: "MMMM dd, yyyy"
}

const shortFormats = {
    pt: "dd MMM yyyy",
    es: "dd MMM yyyy",
    en: "MMM dd, yyyy"
}

const monthYearFormats = {
    pt: "MMMM 'de' yyyy",
    es: "MMMM 'de' yyyy",
    en: "MMMM yyyy"
}

export const useFormattedDate = (date?: string, options?: { short?: boolean, monthYear?: boolean }) => {

    const lang = useLang()

    if (!date) return ''

    const selectedFormat = options?.monthYear ? monthYearFormats : options?.short ? shortFormats : formats

    const formatted = format(
        parseISO(date),
        selectedFormat[lang],
        {
            locale: locales[lang]
        }
    )

    return options?.monthYear ? formatted.charAt(0).toUpperCase() + formatted.slice(1) : formatted

}