import { useContext, useMemo } from "react";
import { MediaListContexts } from "../../../../contexts/MediaListProvider";
import type { Media, PersonCredit } from "../../../../types/tmdb"
import { normalizeText } from "../../../../utils/formatters/normalizeText";
import NoResults from "./components/no-results/NoResults";
import ListGrid from "./components/list-grid/ListGrid";
import EmptyList from "./components/empty-list/EmptyList";

export default function List({ loading, search }: { loading: boolean, search: string }) {

    const { list, filteredList, sortBy } = useContext(MediaListContexts)!

    const source = filteredList ?? list

    const normalizedSearch = normalizeText(search.trim())

    const searchedList = useMemo(() => {
        if (!normalizedSearch) return source

        return source.filter(item =>
            normalizeText(item.title ?? item.name ?? "").includes(normalizedSearch)
        )
    }, [source, normalizedSearch])

    const getReleaseDate = (item: PersonCredit | Media) => {
        const media = item as Media
        return media.media_type === "movie" ? media.release_date : media.first_air_date
    }

    const sortedList = useMemo(() => {
        return [...searchedList].sort((a, b) => {
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
    }, [searchedList, sortBy])

    if (loading) {
        return <ListGrid items={Array.from({ length: 10 }, () => undefined)} loading />
    }

    if (list.length === 0) return <EmptyList />

    if (sortedList.length === 0) return <NoResults />

    return <ListGrid items={sortedList} loading={false} />
}