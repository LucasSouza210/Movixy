import { useContext, useEffect, useState } from "react";
import type { Episode, Media, Season } from "../../../../../types/tmdb";
import EpisodeList from "./episode-list/EpisodeList";
import SeasonPicker from "./season-picker/SeasonPicker";
import { getSeasonEpisodes } from "../../../../../services/movies/movies.services";
import { Contexts } from "../../../../../contexts/ContextsProvider";

export default function SeasonsResume({ media, seasons, selected, setSelected }: { media: Media, seasons: Season[] | undefined, selected: number, setSelected: React.Dispatch<React.SetStateAction<number>> }) {

    const contexts = useContext(Contexts)

    const { lang } = contexts!

    const [episodes, setEpisodes] = useState<Episode[]>([])

    useEffect(() => {

        if (!media?.id) return

        getSeasonEpisodes(media.id, selected, lang).then(setEpisodes)

    }, [media?.id, selected, lang])

    return (
        <div className="flex flex-col gap-3">
            <SeasonPicker seasons={seasons} selected={selected} setSelected={setSelected} />
            <EpisodeList list={episodes} />
        </div>
    )
}