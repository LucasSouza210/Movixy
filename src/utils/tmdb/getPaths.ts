import { getList } from "../../services/tmdb/tmdb.services"
import type { ContentItem, ListItem, PersonItem } from "../../types/tmdb"

type Lang = "pt" | "en" | "es"

export async function getPaths(listItems: ListItem[], lang: Lang, limit = 4): Promise<(string | null)[]> {

    const sliced = listItems.slice(0, limit)

    const mapped: (ContentItem | PersonItem)[] = sliced.map((item) => {
        if (item.item_type === "person") {
            return { id: String(item.item_id), title: "" } as PersonItem
        }
        return { id: String(item.item_id), mediaType: item.item_type, title: "" } as ContentItem
    })

    const data = await getList(mapped, lang)

    return data.map((item) =>
        "profile_path" in item ? item.profile_path : item.poster_path
    )
}