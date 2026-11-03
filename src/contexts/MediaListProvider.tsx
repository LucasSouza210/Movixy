import { createContext, useState } from "react"
import type { Media, PersonCredit } from "../types/tmdb"
import { defaultListFilters } from "../utils/constants"

type ProviderProps = {
    children: React.ReactNode
    list: PersonCredit[] | Media[]
}

type MediaListFilters = {
    type: string
    genres: number[]
    rate: {
        min: number | null
        max: number | null
        error: boolean
    }
}

type MediaListContexts = {
    list: PersonCredit[] | Media[]
    setList: React.Dispatch<React.SetStateAction<PersonCredit[] | Media[]>>
    listFilters: MediaListFilters
    setListFilters: React.Dispatch<React.SetStateAction<MediaListFilters>>
    filteredList: null | PersonCredit[] | Media[]
    setFilteredList: React.Dispatch<React.SetStateAction<null | PersonCredit[] | Media[]>>
    sortBy: 'newest' | 'oldest' | 'highest_rated' | 'lowest_rated'
    setSortBy: React.Dispatch<React.SetStateAction<'newest' | 'oldest' | 'highest_rated' | 'lowest_rated'>>
}

export const MediaListContexts = createContext<MediaListContexts | null>(null)

export default function MediaListProvider({ children, list: initialProjects }: ProviderProps) {

    const [list, setList] = useState<PersonCredit[] | Media[]>(initialProjects)

    const [previousList, setPreviousList] = useState<PersonCredit[] | Media[]>(initialProjects)

    const [listFilters, setListFilters] = useState<MediaListFilters>(defaultListFilters)

    const [filteredList, setFilteredList] = useState<null | PersonCredit[] | Media[]>(null)

    const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'highest_rated' | 'lowest_rated'>('newest')

    if (previousList !== initialProjects) {
        setPreviousList(initialProjects)
        setList(initialProjects)
    }

    return (
        <MediaListContexts.Provider value={{ list, setList, filteredList, setFilteredList, listFilters, setListFilters, sortBy, setSortBy }}>
            {children}
        </MediaListContexts.Provider >
    )
}