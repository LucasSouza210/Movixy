import React, { createContext, useState, type SetStateAction } from "react"

type ProviderProps = {
    children: React.ReactNode
}

type HeaderSearchContexts = {
    loading: boolean
    setLoading: React.Dispatch<SetStateAction<boolean>>
    search: string
    setSearch: React.Dispatch<SetStateAction<string>>
    cardClicked: boolean
    setCardClicked: React.Dispatch<SetStateAction<boolean>>
}

export const HeaderSearchContexts = createContext<HeaderSearchContexts | null>(null)

export default function HeaderSearchProvider({ children }: ProviderProps) {

    const [loading, setLoading] = useState<boolean>(false)
    const [search, setSearch] = useState<string>('')
    const [cardClicked, setCardClicked] = useState<boolean>(false)

    return (
        <HeaderSearchContexts.Provider value={{ loading, setLoading, search, setSearch, cardClicked, setCardClicked }}>
            {children}
        </HeaderSearchContexts.Provider >
    )
}