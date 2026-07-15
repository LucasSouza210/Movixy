import React, { createContext, useState, type SetStateAction } from "react"

type ProviderProps = {
    children: React.ReactNode
}

type HeaderSearchContexts = {
    search: string
    setSearch: React.Dispatch<SetStateAction<string>>
    open: boolean
    setOpen: React.Dispatch<SetStateAction<boolean>>
}

export const HeaderSearchContexts = createContext<HeaderSearchContexts | null>(null)

export default function HeaderSearchProvider({ children }: ProviderProps) {

    const [search, setSearch] = useState<string>('')
    const [open, setOpen] = useState<boolean>(false)

    return (
        <HeaderSearchContexts.Provider value={{ search, setSearch, open, setOpen }}>
            {children}
        </HeaderSearchContexts.Provider >
    )
} 