import type { Movie } from "../../pages/home/home-components/home-slider/HomeSlider";

export default function MediaCard({ movie }: { movie: Movie }) {
    return (
        <div className="h-full aspect-2/3 shrink-0 rounded-3xl sm:rounded-[28px] md:rounded-4xl lg:rounded-2xl xl:rounded-[20px] 2xl:rounded-3xl overflow-hidden bg-zinc-300">
            <img src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} alt="" className="size-full object-cover"/>
        </div>
    )
}