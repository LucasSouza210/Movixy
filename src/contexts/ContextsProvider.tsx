import React, { createContext, useState, useEffect } from "react"
import type { JSX, ReactNode } from "react"
import type { UserList } from "../types/tmdb"
import { defaultUserLists } from "../utils/constants"

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

    userLists: UserList[]
    setUserLists: React.Dispatch<React.SetStateAction<UserList[]>>
}

type ProviderProps = {
    children: ReactNode
}

export const Contexts = createContext<AppContexts | null>(null)

function parseUserLists(saved: string): UserList[] {
    try {
        return JSON.parse(saved, (key, value) =>
            key === "creation" ? new Date(value) : value
        )
    } catch {
        return defaultUserLists
    }
}

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

    const [userLists, setUserLists] = useState<UserList[]>(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem('userLists')
            if (saved) return parseUserLists(saved)
        }
        return defaultUserLists
    })

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem('mode', JSON.stringify(mode))
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
            localStorage.setItem('lang', JSON.stringify(lang))
        }
    }, [lang])

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem('userLists', JSON.stringify(userLists))
        }
    }, [userLists])

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
        <Contexts.Provider value={{ mode, setMode, lang, setLang, country, setCountry, overlay, setOverlay, userLists, setUserLists }}>
            {children}
        </Contexts.Provider>
    )
}