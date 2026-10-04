import { getListById, type ListWithItems } from "../../services/lists-services/listsServices"
import { getList } from "../../services/tmdb/lists"
import { getPersonCardContent } from "../../services/tmdb/person"

import type { ContentItem, Media, PersonCardInfo } from "../../types/tmdb"

type Lang = "pt" | "en" | "es"

export type ListPageData = ListWithItems & {
    resolvedItems: Media[] | PersonCardInfo[]
}

export async function getListData(listId: string, lang: Lang): Promise<ListPageData> {

    const list = await getListById(listId)
    const items = list.list_items ?? []

    if (list.type === "person") {
        const results = await Promise.allSettled(
            items.map((item) => getPersonCardContent(String(item.item_id), lang))
        )

        const resolvedItems = results
            .filter((r): r is PromiseFulfilledResult<PersonCardInfo> => r.status === "fulfilled")
            .map((r) => r.value)

        return { ...list, resolvedItems }
    }

    const mapped: ContentItem[] = items.map((item) => ({
        id: String(item.item_id),
        mediaType: item.item_type as "movie" | "tv",
        title: ""
    }))

    const rawItems = await getList(mapped, lang) as Media[]

    const resolvedItems = rawItems.map((item) => ({
        ...item,
        genre_ids: item.genre_ids ?? item.genres?.map((g) => g.id) ?? []
    }))

    return { ...list, resolvedItems }
}