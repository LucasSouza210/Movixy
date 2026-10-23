import type { Media, PersonCredit } from "../../../../../../../../types/tmdb";
import Exclude from "./components/buttons/Exclude";
import SaveMedia from "./components/buttons/SaveMedia";
import RatingBadge from "./components/RatingBadge";

export default function PosterActions({ media, exclude }: { media: Media | PersonCredit, exclude?: boolean }) {
    return (
        <div className="size-full flex flex-col items-end absolute z-20 p-3.5 sm:p-4.25 md:p-5 lg:p-2.5 xl:p-3.25 2xl:p-4 justify-between">
            {
                exclude ?
                    <Exclude itemId={media.id} type={media.media_type ?? 'movie'} title={media.title} />
                    :
                    <SaveMedia media={media} />
            }
            {
                media.vote_average !== undefined &&
                media.vote_average > 0 &&
                <RatingBadge rating={media.vote_average} />
            }
        </div>
    )
}