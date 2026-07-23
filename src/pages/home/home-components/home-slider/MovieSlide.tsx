import type { Media } from "../../../../types/tmdb"
import MediaPosterInfo from "../../../../components/ui/shared/media-poster-info/MediaPosterInfo";
import HomeSliderPoster from "./HomeSliderPoster";
import SliderLinks from "./slider-links/SliderLinks";

export default function MovieSlide({ movie }: { movie: Media }) {
    return (
        <div className="size-full flex relative">
            <HomeSliderPoster poster={movie.poster_path} backdrop={movie.backdrop_path} title={movie.title} />
            <div className="size-full flex flex-col justify-end items-start gap-8 sm:gap-10 md:gap-12 lg:gap-6 xl:gap-8 2xl:gap-10 absolute p-6 sm:p-8 md:p-10 lg:px-8 xl:px-9 2xl:px-10 lg:py-4 xl:py-5 2xl:py-6 bg-black/55">
                <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-4 xl:gap-5 2xl:gap-6">
                    <MediaPosterInfo media={movie} bottom/>
                    {/* <SliderLinks id={movie.id} /> */}
                </div>
            </div>
        </div>
    )
}