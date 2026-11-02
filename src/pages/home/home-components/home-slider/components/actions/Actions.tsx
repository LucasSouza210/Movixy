import type { Media } from "../../../../../../types/tmdb";
import Nav from "./components/nav/Nav";
import ChangeEpisode from "./components/ChangeEpisode";

export default function Actions({ movies, previousSlide, nextSlide, resetInterval, currentIndex, setCurrentIndex }: { movies: Media[], previousSlide: () => void, nextSlide: () => void, resetInterval: () => void, currentIndex: number, setCurrentIndex: React.Dispatch<React.SetStateAction<number>> }) {
    return (
        <div className="w-full flex items-center justify-center gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-2 xl:gap-2.25 2xl:gap-2.5 absolute bottom-6 sm:bottom-7 md:bottom-8 lg:bottom-4 xl:bottom-5 2xl:bottom-6">
            <ChangeEpisode type="previous" action={previousSlide} />
            <Nav movies={movies} resetInterval={resetInterval} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
            <ChangeEpisode type="next" action={nextSlide} />
        </div>
    )
}