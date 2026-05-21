import { createContext, useContext, useEffect, useState } from "react"
import type { Episode, Media } from "../types/tmdb"
import { getSeasonEpisodes } from "../services/movies/movies.services"
import { Contexts } from "./ContextsProvider"

type ProviderProps = {
    children: React.ReactNode
    media: Media
}

type ExplorerContexts = {
    selectedSeason: number
    setSelectedSeason: React.Dispatch<React.SetStateAction<number>>
    selectedEp: number
    setSelectedEp: React.Dispatch<React.SetStateAction<number>>
    episodes: Episode[]
    setEpisodes: React.Dispatch<React.SetStateAction<Episode[]>>
}

export const ExplorerContexts = createContext<ExplorerContexts | null>(null)

export default function SeasonExplorerProvider({ children, media }: ProviderProps) {

    const contexts = useContext(Contexts)
    const { lang } = contexts!

    const [selectedSeason, setSelectedSeason] = useState(1)
    const [selectedEp, setSelectedEp] = useState(1)

    const [episodes, setEpisodes] = useState<Episode[]>([])

    useEffect(() => {

        if (!media.id) return

        getSeasonEpisodes(media.id, selectedSeason, lang).then(setEpisodes)

    }, [media.id, selectedSeason, lang])

    useEffect(() => {
        setSelectedEp(1)
    }, [selectedSeason])

    return (
        <ExplorerContexts.Provider value={{ selectedSeason, setSelectedSeason, selectedEp, setSelectedEp, episodes, setEpisodes }}>
            {children}
        </ExplorerContexts.Provider >
    )
}