import type { Media } from "../../../../../../../../types/tmdb";
import Title from "./components/title/Title";
import Badges from "./components/badges/Badges";

export default function Info({ media, mediaType, desktop, loading }: { media: Media | null, mediaType: string | undefined, desktop?: boolean, loading: boolean }) {

    const isMovie = mediaType == 'movie'

    const releaseYear = (isMovie ? media?.release_date : media?.first_air_date)?.split("-")[0]

    return (
        <div className={`flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-2.5 xl:gap-3 2xl:gap-3.5 ${desktop ? 'hidden lg:flex' : 'flex'}`}>
            <Title title={isMovie ? media?.title : media?.name} releaseYear={releaseYear} loading={loading} />
            <Badges media={media} loading={loading} />
        </div>
    )
}