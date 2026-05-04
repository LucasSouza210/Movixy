import { useEffect, useState } from "react"
import { getNowPlayingMovies } from "../../../../services/movies/movies.services"
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { useTranslate } from "../../../../translations/Translations";

export default function HomeSlider() {

    const [movies, setMovies] = useState<any[]>([])

    const { line } = useTranslate()

    useEffect(() => {
        getNowPlayingMovies().then(setMovies)
        console.log(movies)
    }, [])

    return (
        <div className="w-full flex relative rounded-[40px] overflow-hidden" onClick={() => console.log(movies)}>
            <img src={`https://image.tmdb.org/t/p/original${movies[0]?.poster_path}`} className="size-full block lg:hidden" />
            <img src={`https://image.tmdb.org/t/p/original${movies[0]?.backdrop_path}`} className="size-full hidden lg:block" />
            <div className="size-full flex items-center absolute px-6 bg-black/50">
                <div className="hidden">
                    <p className="px-4 py-3 border rounded-full font-medium text-base leading-none bg-zinc-800/80 text-white border-white">{line('nowPlaying')}</p>
                </div>
                <div className="flex items-center gap-4 absolute bottom-6 left-1/2 -translate-x-1/2">
                    <button><FaAngleLeft className="fill-zinc-300" /></button>
                    <div className="flex items-center gap-2">
                        {
                            [0, 1, 2, 3, 4].map((i, index) => (
                                <button key={index}><span className={`${index == 0 ? 'bg-zinc-100' : 'bg-zinc-400'} size-2 block rounded-full`} /></button>
                            ))
                        }
                    </div>
                    <button><FaAngleRight className="fill-zinc-300" /></button>
                </div>
            </div>
        </div>
    )
}