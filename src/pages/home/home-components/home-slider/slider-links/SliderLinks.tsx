import PosterMediaLink from "../../../../../components/ui/shared/media-poster-info/components/media-poster-links/links/MediaPageLink";
import PosterTrailerLink from "../../../../../components/ui/shared/media-poster-info/components/media-poster-links/links/PosterTrailerLink";

export default function SliderLinks({ id }: { id: number }) {
    return (
        <div className="flex items-center gap-3.5 sm:gap-4 md:gap-4.5 lg:gap-3 xl:gap-3.5 2xl:gap-4">
            <PosterTrailerLink id={id} />
            <PosterMediaLink id={id} />
        </div>
    )
}