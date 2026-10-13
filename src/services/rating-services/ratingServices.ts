import type { ListItemMediaType } from "../../types/tmdb"
import { supabase } from "../api/supabase"

const CONFLICT_COLUMNS = "user_id,item_type,item_id,season_number,episode_number"

export async function getMediaRating(itemId: number, mediaType: ListItemMediaType): Promise<number | null> {
    const { data, error } = await supabase
        .from("ratings")
        .select("rating")
        .eq("item_id", itemId)
        .eq("item_type", mediaType)
        .maybeSingle()

    if (error) throw error
    return data ? Number(data.rating) : null
}

export async function setMediaRating(itemId: number, mediaType: ListItemMediaType, rating: number) {
    const { error } = await supabase
        .from("ratings")
        .upsert(
            { item_id: itemId, item_type: mediaType, season_number: null, episode_number: null, rating },
            { onConflict: CONFLICT_COLUMNS }
        )

    if (error) throw error
}

export async function removeMediaRating(itemId: number, mediaType: ListItemMediaType) {
    const { error } = await supabase
        .from("ratings")
        .delete()
        .eq("item_id", itemId)
        .eq("item_type", mediaType)

    if (error) throw error
}

export async function getEpisodeRating(showId: number, season: number, episode: number): Promise<number | null> {
    const { data, error } = await supabase
        .from("ratings")
        .select("rating")
        .eq("item_id", showId)
        .eq("item_type", "episode")
        .eq("season_number", season)
        .eq("episode_number", episode)
        .maybeSingle()

    if (error) throw error
    return data ? Number(data.rating) : null
}

export async function getSeasonRatings(showId: number, season: number): Promise<Record<number, number>> {
    const { data, error } = await supabase
        .from("ratings")
        .select("episode_number, rating")
        .eq("item_id", showId)
        .eq("item_type", "episode")
        .eq("season_number", season)

    if (error) throw error

    return Object.fromEntries(data.map((row) => [row.episode_number, Number(row.rating)]))
}

export async function setEpisodeRating(showId: number, season: number, episode: number, rating: number) {
    const { error } = await supabase
        .from("ratings")
        .upsert(
            { item_id: showId, item_type: "episode", season_number: season, episode_number: episode, rating },
            { onConflict: CONFLICT_COLUMNS }
        )

    if (error) throw error
}

export async function removeEpisodeRating(showId: number, season: number, episode: number) {
    const { error } = await supabase
        .from("ratings")
        .delete()
        .eq("item_id", showId)
        .eq("item_type", "episode")
        .eq("season_number", season)
        .eq("episode_number", episode)

    if (error) throw error
}