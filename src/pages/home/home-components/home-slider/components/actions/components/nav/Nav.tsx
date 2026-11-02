import type { Media } from "../../../../../../../../types/tmdb"
import Option from "./components/Option"

export default function Nav({ movies, resetInterval, currentIndex, setCurrentIndex }: { movies: Media[], resetInterval: () => void, currentIndex: number, setCurrentIndex: React.Dispatch<React.SetStateAction<number>> }) {
    return (
        <div className="flex items-center gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-1.5 xl:gap-1.75 2xl:gap-2">
            {
                movies.map((_, index) => (
                    <Option index={index} currentIndex={currentIndex} resetInterval={resetInterval} setCurrentIndex={setCurrentIndex} key={index} />
                ))
            }
        </div>
    )
}