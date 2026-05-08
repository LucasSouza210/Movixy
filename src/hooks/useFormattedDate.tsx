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

export const useFormattedDate = (date: string) => {

    const contexts = useContext(Contexts)

    const { lang } = contexts!

    return format(
        parseISO(date),
        formats[lang],
        {
            locale: locales[lang]
        }
    )
}