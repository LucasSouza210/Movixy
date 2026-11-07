import { useEffect } from "react"
import useLang from "./useLang"

const htmlLangByLang = {
    pt: "pt-BR",
    en: "en",
    es: "es"
} as const

export default function useDocumentLang() {

    const lang = useLang()

    useEffect(() => {
        document.documentElement.lang = htmlLangByLang[lang]
    }, [lang])
}