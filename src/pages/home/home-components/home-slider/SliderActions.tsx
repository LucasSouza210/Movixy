import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import type { Movie } from "./HomeSlider";

export default function SliderActions({ movies, previousSlide, nextSlide, resetInterval, currentIndex, setCurrentIndex}: { movies: Movie[], previousSlide: () => void, nextSlide: () => void, resetInterval: () => void, currentIndex: number, setCurrentIndex: React.Dispatch<React.SetStateAction<number>> }) {

    return (
        <div className="w-full flex items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-2 xl:gap-2.25 2xl:gap-2.5 absolute bottom-6 sm:bottom-7 md:bottom-8 lg:bottom-4 xl:bottom-5 2xl:bottom-6">
            <button onClick={() => previousSlide()}><FaAngleLeft className="size-5 sm:size-6 md:size-7 lg:size-4 xl:size-4.5 2xl:size-5 fill-zinc-300" /></button>
            <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-1.5 xl:gap-1.75 2xl:gap-2">
                {
                    movies.map((i, index) => (
                        <button key={i.id} onClick={() => {
                            resetInterval()
                            setCurrentIndex(index + 1)
                        }}>
                            <span className={`${index == currentIndex - 1 ? 'bg-orange-500' : 'bg-zinc-400'} size-2.5 sm:size-3 md:size-3.5 lg:size-2 xl:size-2.25 2xl:size-2.5 block rounded-full`} />
                        </button>
                    ))
                }
            </div>
            <button onClick={() => nextSlide()}><FaAngleRight className="size-5 sm:size-6 md:size-7 lg:size-4 xl:size-4.5 2xl:size-5 fill-zinc-300" /></button>
        </div>
    )
}