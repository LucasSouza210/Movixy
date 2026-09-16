import React, { createContext, useState, useEffect, useCallback } from "react"
import type { JSX, ReactNode } from "react"
import type { UserList } from "../types/tmdb"
import { defaultUserLists } from "../utils/constants"
import type { Session, User } from "@supabase/supabase-js"
import { supabase } from "../services/api/supabase"
import { getUserLists } from "../services/lists-services/listsServices"

type OverlayConfig = {
    component: JSX.Element
    center?: boolean
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

    userLists: UserList[] | null
    setUserLists: React.Dispatch<React.SetStateAction<UserList[] | null>>

    session: Session | null
    user: User | null
    authInitializing: boolean

    authLoading: boolean
    setAuthLoading: React.Dispatch<React.SetStateAction<boolean>>

    authError: string | null
    setAuthError: React.Dispatch<React.SetStateAction<string | null>>
}

type ProviderProps = {
    children: ReactNode
}

export const Contexts = createContext<AppContexts | null>(null)

function parseUserLists(saved: string): UserList[] {
    try {
        return JSON.parse(saved, (key, value) => {
            if (key === "creation" || key === "updatedAt") {
                return value === null ? null : new Date(value)
            }
            return value
        })
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

    const [userLists, setUserLists] = useState<UserList[] | null>(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem('userLists')
            if (saved) return parseUserLists(saved)
        }
        return defaultUserLists
    })

    const [session, setSession] = useState<Session | null>(null)
    const [authInitializing, setAuthInitializing] = useState(true)

    const [authLoading, setAuthLoading] = useState(false)
    const [authError, setAuthError] = useState<string | null>(null)

    const refreshUserLists = useCallback(async () => {
        if (!session?.user) {
            setUserLists([])
            return
        }

        setUserLists(null)
        try {
            const data = await getUserLists()
            setUserLists(data)
        } catch (error) {
            console.error("Failed to fetch user lists:", error)
            setUserLists([])
        }
    }, [session?.user?.id])

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem('mode', JSON.stringify(mode))
        }
    }, [mode])

    useEffect(() => {
        const root = window.document.documentElement
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

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
            setAuthInitializing(false)
        })

        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setSession(session)
            }
        )

        return () => subscription.unsubscribe()
    }, [])

    useEffect(() => {
        if (authInitializing) return
        refreshUserLists()
    }, [authInitializing, session?.user?.id, refreshUserLists])

    return (
        <Contexts.Provider value={{
            mode, setMode,
            lang, setLang,
            country, setCountry,
            overlay, setOverlay,
            userLists, setUserLists,
            session, user: session?.user ?? null, authInitializing,
            authLoading, setAuthLoading,
            authError, setAuthError,
        }}>
            {children}
        </Contexts.Provider>
    )
}