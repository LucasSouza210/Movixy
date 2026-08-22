import type { Media } from "../../../../../types/tmdb"

export default function HomeSliderNav({ movies, resetInterval, currentIndex, setCurrentIndex }: { movies: Media[], resetInterval: () => void, currentIndex: number, setCurrentIndex: React.Dispatch<React.SetStateAction<number>> }) {
    return (
        <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-1.5 xl:gap-1.75 2xl:gap-2">
            {
                movies.map((i, index) => (
                    <button key={i.id} className={`${index == currentIndex - 1 ? 'bg-orange-500' : 'bg-zinc-400 hover:bg-orange-500'} size-2.5 sm:size-3 md:size-3.5 lg:size-2 xl:size-2.25 2xl:size-2.5 block rounded-full transition-all duration-300 ease-in-out cursor-pointer`} onClick={() => {
                        resetInterval()
                        setCurrentIndex(index + 1)
                    }} />
                ))
            }
        </div>
    )
}