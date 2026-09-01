export type Person = {
    id: number
    name: string
    profile_path: string | null
    known_for_department: string
}

export interface Credit {
    id: number
    media_type?: 'movie' | 'tv'
    title?: string
    name?: string
    character?: string
    popularity?: number
    vote_average?: number
    vote_count?: number
    poster_path?: string
}

export interface Actor {
    id: number
    name: string
    profile_path: string | null
    popularity: number
    place_of_birth?: string
    birthday?: string
}

export interface PersonCredits {
    cast: Credit[]
    crew: Credit[]
}

export interface DirectorMovie {
    id: number
    title: string
    poster_path: string | null
    backdrop_path: string | null
    vote_average: number
    vote_count: number
    release_date?: string
}

export interface Director {
    id: number
    name: string
    profile_path: string | null
    popularity: number
    known_for_department: string
    birthday?: string
    place_of_birth?: string
    movies: DirectorMovie[]
}

export interface CastMember {
    id: number
    name: string
    character: string
    profile_path: string | null
}

export interface CrewMember {
    id: number
    name: string
    job: string
    department: string
}

export interface Genre {
    id: number
    name: string
}

export interface Episode {
    id: number
    name: string
    overview: string
    episode_number: number
    season_number: number
    runtime?: number
    vote_average: number
    still_path: string | null
    air_date?: string
}

export interface Season {
    id: number
    name: string
    overview: string
    poster_path: string | null
    season_number: number
    episode_count: number
    air_date?: string

    episodes?: Episode[]
}

export interface Media {
    id: number
    media_type?: string
    title?: string
    name?: string
    overview?: string
    poster_path: string
    backdrop_path: string
    vote_average: number
    release_date?: string
    first_air_date?: string
    runtime?: number
    seasons?: Season[]
    number_of_seasons?: number
    number_of_episodes?: number
    production_companies?: {
        id: number
        name: string
        logo_path: string | null
    }[]

    networks?: {
        id: number
        name: string
        logo_path: string | null
    }[]

    credits?: {
        cast: CastMember[]
        crew: CrewMember[]
    }

    created_by?: {
        id: number
        name: string
    }[]

    budget?: number
    revenue?: number

    genres?: Genre[]
}

export interface PersonDetails {
    id: number
    name: string
    adult: boolean
    also_known_as: string[]
    biography: string
    birthday: string | null
    deathday: string | null
    gender: number
    homepage: string | null
    imdb_id: string | null
    known_for_department: string
    place_of_birth: string | null
    popularity: number
    profile_path: string | null

    combined_credits: {
        cast: PersonCredit[]
        crew: PersonCredit[]
    }
}

export interface PersonCardInfo {
    id: number,
    name: string,
    profile_path: string,
    credits: PersonCredit[]
}

export type PersonCredit = Credit & {
    media_type: "movie" | "tv"

    adult?: boolean
    original_title?: string
    original_name?: string

    backdrop_path: string | null
    overview: string

    release_date?: string
    first_air_date?: string

    department?: string
    job?: string

    genre_ids: number[]

    order?: number
    episode_count?: number
}

export interface MediaInfoBadges {
    rate: number | undefined,
    runtime: number | undefined,
    seasons: number | undefined,
    certification: string | undefined
}

type SearchMedia = Media & {
    media_type: "movie" | "tv"
}

type SearchPerson = Person & {
    media_type: "person"
}

export type SearchContent = SearchMedia | SearchPerson

export interface WatchProvider {
    provider_id: number
    provider_name: string
    logo_path: string
    display_priority: number
}

export interface ContentItem {
    id: string
    mediaType: "movie" | "tv"
    title: string
}

export interface PersonItem {
    id: string
    title: string
}

interface BaseUserList {
    title: string
    translate?: boolean
    description?: string
    creation: Date
    updatedAt: Date | null | undefined
}

export type ListType = "media" | "person"

export type ListItemMediaType = "movie" | "tv" | "person"

export interface UserList {
    id: string
    user_id: string
    type: ListType
    title: string
    description: string | null
    fixed: boolean
    is_public: boolean
    created_at: string
    updated_at: string
    list_items?: ListItem[]
}

export interface ListItem {
    id: string
    list_id: string
    item_id: number
    item_type: ListItemMediaType
    added_at: string
}

export type SaveTarget = {
    id: number
    type: ListItemMediaType | undefined
}