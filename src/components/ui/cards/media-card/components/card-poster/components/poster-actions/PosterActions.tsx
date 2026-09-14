import type { Media, PersonCredit } from "../../../../../../../../types/tmdb";
import RatingBadge from "./components/RatingBadge";
import SaveMedia from "./components/SaveMedia";

export default function PosterActions({ media, hideSave }: { media: Media | PersonCredit, hideSave?: boolean }) {
    return (
        <div className="size-full flex flex-col items-end justify-between absolute z-10 p-3.5 sm:p-4.25 md:p-5 lg:p-2.5 xl:p-3.25 2xl:p-4">
            {
                !hideSave &&
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