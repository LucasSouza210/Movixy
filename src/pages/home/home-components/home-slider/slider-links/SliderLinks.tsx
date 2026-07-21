import SliderMovieLink from "./SliderMovieLink";
import SliderTrailerLink from "./SliderTrailerLink";

export default function SliderLinks({ id }: { id: number }) {
    return (
        <div className="flex items-center gap-3.5 sm:gap-4 md:gap-4.5 lg:gap-3 xl:gap-3.5 2xl:gap-4">
            <SliderTrailerLink id={id} />
            <SliderMovieLink id={id}/>
        </div>
    )
}