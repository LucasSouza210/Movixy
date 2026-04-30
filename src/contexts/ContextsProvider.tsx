import { createContext, useState, useEffect } from "react"
import type { JSX, ReactNode } from "react"

type AppContexts = {
    mode: string | undefined
    setMode: React.Dispatch<React.SetStateAction<string | undefined>>
    lang: 'pt' | 'en' | 'es'
    setLang: React.Dispatch<React.SetStateAction<'pt' | 'en' | 'es'>>
    overlay: boolean | JSX.Element
    setOverlay: React.Dispatch<React.SetStateAction<boolean | JSX.Element>>
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

    const [overlay, setOverlay] = useState<boolean | JSX.Element>(false)

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

    return (
        <Contexts.Provider value={{ mode, setMode, lang, setLang, overlay, setOverlay }}>
            {children}
        </Contexts.Provider>
    )
}