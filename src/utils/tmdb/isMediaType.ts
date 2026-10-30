import type { MediaType } from "../../types/tmdb";

export function isMediaType(value: string | undefined): value is MediaType {
    return value === "movie" || value === "tv"
}