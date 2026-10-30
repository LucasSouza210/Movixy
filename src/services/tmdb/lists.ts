import { apiFetch } from "../api/client";
import { endpoints } from "../api/endpoints";
import type { ContentItem, Lang, Media, Person, PersonItem } from "../../types/tmdb";

export async function getList(items: (ContentItem | PersonItem)[], lang: Lang): Promise<(Media | Person)[]> {
  const results = items.map((item) => {
    const endpoint = "mediaType" in item ? `/${item.mediaType}/${item.id}` : `${endpoints.people.person}/${item.id}`
    return apiFetch(endpoint, lang)
  }),
    settled = await Promise.allSettled(results),
    data = settled.map((result, index) => {
      if (result.status === 'rejected') {
        console.error(`Erro ao buscar item ${items[index].id}:`, result.reason)
        return null
      }

      const item = items[index]
      if ("mediaType" in item) {
        return { ...result.value, media_type: item.mediaType }
      }

      return result.value
    }).filter((item): item is Media | Person => item !== null);

  return data
}