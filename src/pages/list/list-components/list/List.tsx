import { useContext, useMemo } from "react";
import { MediaListContexts } from "../../../../contexts/MediaListProvider";
import type { Media, PersonCredit } from "../../../../types/tmdb"
import NoResults from "./components/no-results/NoResults";
import ListGrid from "./components/list-grid/ListGrid";
import EmptyList from "./components/empty-list/EmptyList";

export default function List({ loading }: { loading: boolean }) {

    const listContexts = useContext(MediaListContexts)

    const { list, filteredList, sortBy } = listContexts!

    const source = filteredList ?? list

    const getReleaseDate = (item: PersonCredit | Media) => {
        const media = item as Media
        return media.media_type === "movie" ? media.release_date : media.first_air_date
    }

    const sortedList = useMemo(() => {
        return [...source].sort((a, b) => {
            switch (sortBy) {
                case "oldest": {
                    const dateA = getReleaseDate(a) ? new Date(getReleaseDate(a)!).getTime() : Infinity
                    const dateB = getReleaseDate(b) ? new Date(getReleaseDate(b)!).getTime() : Infinity
                    return dateA - dateB;
                }
                case "highest_rated":
                    return (b.vote_average ?? 0) - (a.vote_average ?? 0)
                case "lowest_rated":
                    return (a.vote_average ?? 0) - (b.vote_average ?? 0)
                default: {
                    const dateA = getReleaseDate(a) ? new Date(getReleaseDate(a)!).getTime() : -Infinity
                    const dateB = getReleaseDate(b) ? new Date(getReleaseDate(b)!).getTime() : -Infinity
                    return dateB - dateA;
                }
            }
        })
    }, [source, sortBy])

    const items = loading ? (Array.from({ length: 10 } as undefined[])) : sortedList

    return (
        (filteredList && filteredList.length === 0) ? <NoResults />
            :
            loading ? <ListGrid items={items} loading={loading} />
                :
                (list.length > 0 && !loading) ? <ListGrid items={items} loading={loading} /> : <EmptyList />
    )
}