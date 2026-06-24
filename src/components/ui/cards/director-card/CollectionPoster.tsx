import type { DirectorMovie } from "../../../../types/tmdb";

export default function CollectionPoster({ list }: { list:DirectorMovie[] }) {
    return (
        <div className="h-full w-fit grid grid-cols-2 grid-rows-2 border border-default rounded-2xl sm:rounded-[20px] md:rounded-3xl lg:rounded-2xl xl:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shrink-0">
            {
                list?.slice(0, 4).map((i, index) => (
                    <img src={`https://image.tmdb.org/t/p/original${i.poster_path}`} alt="" className="h-full object-cover" key={index} />
                ))
            }
        </div>
    )
}