import type { Media } from "../../../../types/tmdb";

export default function MediaLabel({ media, mediaType }: { media: Media, mediaType: string | undefined }) {

    const isMovie = mediaType === 'movie'

    return (
        <p className="font-medium tracking-wider leading-none text-zinc-800 dark:text-zinc-200">
            {isMovie ? media.production_companies?.[0]?.name : media.networks?.[0]?.name}
        </p>
    )
}