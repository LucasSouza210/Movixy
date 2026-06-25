import { useContext } from "react"
import { format, parseISO } from "date-fns"
import { ptBR, enUS, es } from "date-fns/locale"

import { Contexts } from "../contexts/ContextsProvider"

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

export const useFormattedDate = (date?: string, options?: { short?: boolean }) => {

    if (!date) return ''

    const contexts = useContext(Contexts)

    const { lang } = contexts!

    const formatOption = options?.short ? shortFormats : formats

    return format(
        parseISO(date),
        formatOption[lang],
        {
            locale: locales[lang]
        }
    )
}