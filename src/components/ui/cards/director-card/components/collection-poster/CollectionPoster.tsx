import type { DirectorMovie } from "../../../../../../types/tmdb";
import { LuImageOff } from "react-icons/lu";
import CollectionPosterItem from "./CollectionPosterItem";

export default function CollectionPoster({ list }: { list: DirectorMovie[] }) {
    return (
        <div className={`h-full aspect-2/3 border border-default rounded-2xl sm:rounded-[20px] md:rounded-3xl lg:rounded-2xl xl:rounded-[19px] 2xl:rounded-[22px] overflow-hidden shrink-0 ${list ? 'grid grid-cols-2 grid-rows-2' : 'flex items-center justify-center bg-zinc-50 dark:bg-zinc-900/40'}`}>
            {
                list ?
                    list?.slice(0, 4).map((i, index) => (
                        <CollectionPosterItem path={i.poster_path} title={i.title} key={index} />
                    ))
                    :
                    <LuImageOff className="size-1/3 text-zinc-400 dark:text-zinc-500" />
            }
        </div>
    )
}