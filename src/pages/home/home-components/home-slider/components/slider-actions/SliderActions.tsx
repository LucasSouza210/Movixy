import { useTranslate } from "../../../../../../translations/Translations";
import type { Media } from "../../../../../../types/tmdb";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import HomeSliderNav from "./HomeSliderNav";

export default function SliderActions({ movies, previousSlide, nextSlide, resetInterval, currentIndex, setCurrentIndex }: { movies: Media[], previousSlide: () => void, nextSlide: () => void, resetInterval: () => void, currentIndex: number, setCurrentIndex: React.Dispatch<React.SetStateAction<number>> }) {

    const { line } = useTranslate()

    return (
        <div className="w-full flex items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-2 xl:gap-2.25 2xl:gap-2.5 absolute bottom-6 sm:bottom-7 md:bottom-8 lg:bottom-4 xl:bottom-5 2xl:bottom-6">
            <button aria-label={line('ariaPreviousSlide')} onClick={() => previousSlide()}>
                <FaAngleLeft className="size-5 sm:size-6 md:size-7 lg:size-4 xl:size-4.5 2xl:size-5 transition-all duration-300 ease-in-out cursor-pointer fill-zinc-200 hover:fill-white" />
            </button>
            <HomeSliderNav movies={movies} resetInterval={resetInterval} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
            <button aria-label={line('ariaNextSlide')} onClick={() => nextSlide()}>
                <FaAngleRight className="size-5 sm:size-6 md:size-7 lg:size-4 xl:size-4.5 2xl:size-5 transition-all duration-300 ease-in-out cursor-pointer fill-zinc-200 hover:fill-white" />
            </button>
        </div>
    )
}