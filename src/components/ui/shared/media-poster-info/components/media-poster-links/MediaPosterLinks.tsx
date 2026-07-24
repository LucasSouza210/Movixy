import MediaPageLink from "./links/MediaPageLink";
import SliderTrailerLink from "./links/PosterTrailerLink";

export default function MediaPosterLinks({ id, type }: { id: number | undefined, type: string | undefined }) {
    return (
        <div className="flex items-center gap-3.5 sm:gap-4 md:gap-4.5 lg:gap-3.5 xl:gap-4.25 2xl:gap-5">
            <SliderTrailerLink id={id} type={type}/>
            <MediaPageLink id={id} type={type} />
        </div>
    )
}