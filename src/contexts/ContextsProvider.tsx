import { createContext, useState, useEffect } from "react"
import type { JSX, ReactNode } from "react"

type OverlayConfig = {
    component: JSX.Element
    self?: boolean
    bottom?: boolean
}

type AppContexts = {
    mode: string | undefined
    setMode: React.Dispatch<React.SetStateAction<string | undefined>>

    lang: 'pt' | 'en' | 'es'
    setLang: React.Dispatch<React.SetStateAction<'pt' | 'en' | 'es'>>

    country: string | undefined
    setCountry: React.Dispatch<React.SetStateAction<string | undefined>>

    overlay: null | OverlayConfig
    setOverlay: React.Dispatch<React.SetStateAction<null | OverlayConfig>>
}

type ProviderProps = {
    children: ReactNode
}

export const Contexts = createContext<AppContexts | null>(null)

export default function ContextsProvider({ children }: ProviderProps) {

    const [mode, setMode] = useState<string | undefined>(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem('mode')
            if (saved) return JSON.parse(saved)
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            return prefersDark ? 'dark' : 'light'
        }
        return 'light'
    })

    const [lang, setLang] = useState<'pt' | 'en' | 'es'>(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem('lang')
            return saved ? JSON.parse(saved) : 'pt'
        }
        return 'pt'
    })

    const [country, setCountry] = useState<string | undefined>(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("country")
            return saved ? JSON.parse(saved) : undefined
        }
        return undefined
    })

    const [overlay, setOverlay] = useState<null | OverlayConfig>(null)

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem('mode', JSON.stringify(mode));
        }
    }, [mode])

    useEffect(() => {
        const root = window.document.body;
        if (mode === "dark") {
            root.setAttribute("theme", "dark")
        } else {
            root.setAttribute("theme", "light")
        }
    }, [mode])

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem('lang', JSON.stringify(lang));
        }
    }, [lang])

    useEffect(() => {
        async function detectCountry() {
            if (country) return

            try {
                const response = await fetch("https://ipwho.is/")
                const data = await response.json()

                if (data.success && data.country_code) {
                    setCountry(data.country_code)
                    return
                }
            } catch (error) {
                console.error("Failed to detect country:", error)
            }

            const fallbackByLang = {
                pt: "BR",
                en: "US",
                es: "ES",
            } as const

            setCountry(fallbackByLang[lang])
        }

        detectCountry()
    }, [country, lang])

    return (
        <Contexts.Provider value={{ mode, setMode, lang, setLang, country, setCountry, overlay, setOverlay }}>
            {children}
        </Contexts.Provider>
    )
}