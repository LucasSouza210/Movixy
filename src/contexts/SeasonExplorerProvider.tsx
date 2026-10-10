import { createContext, useEffect, useMemo, useState } from "react"
import type { Episode, Media, Season } from "../types/tmdb"
import { getSeasonEpisodes } from "../services/tmdb/media"
import { filterSeasons } from "../utils/tmdb/filterSeasons"
import useLang from "../hooks/useLang"

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
    seasons: Season[] | undefined
}

export const ExplorerContexts = createContext<ExplorerContexts | null>(null)

export default function SeasonExplorerProvider({ children, media }: ProviderProps) {

    const lang = useLang()

    const [selectedSeason, setSelectedSeason] = useState(1)
    const [selectedEp, setSelectedEp] = useState(1)

    const [episodes, setEpisodes] = useState<Episode[]>([])

    const seasons = useMemo(() => filterSeasons(media.seasons), [media.seasons])

    useEffect(() => {
    if (!media.id) return

    let cancelled = false

    getSeasonEpisodes(media.id, selectedSeason, lang)
        .then(data => {
            if (!cancelled) setEpisodes(data)
        })
        .catch(console.error)

    return () => {
        cancelled = true
    }
}, [media.id, selectedSeason, lang])

    return (
        <ExplorerContexts.Provider value={{ selectedSeason, setSelectedSeason, selectedEp, setSelectedEp, episodes, setEpisodes, seasons }}>
            {children}
        </ExplorerContexts.Provider >
    )
}