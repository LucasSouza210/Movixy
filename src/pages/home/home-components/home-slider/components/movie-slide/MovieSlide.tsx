import type { Media } from "../../../../../../types/tmdb"
import MediaPosterInfo from "../../../../../../components/ui/shared/media-poster-info/MediaPosterInfo";
import HomeSliderPoster from "./components/HomeSliderPoster";

export default function MovieSlide({ movie }: { movie: Media }) {
    return (
        <div className="min-w-full flex relative">
            <HomeSliderPoster poster={movie.poster_path} backdrop={movie.backdrop_path} title={movie.title} />
            <div className="size-full flex items-end absolute p-6 sm:p-8 md:p-10 lg:px-8 xl:px-9 2xl:px-10 lg:py-4 xl:py-5 2xl:py-6 bg-black/55">
                <MediaPosterInfo media={movie} bottom />
            </div>
        </div>
    )
}