import type { DirectorMovie } from "../../../../../../types/tmdb";
import { LuImageOff } from "react-icons/lu";
import Item from "./Item";

export default function Collection({ list }: { list: DirectorMovie[] }) {
    return (
        <div className="w-full flex items-center justify-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-3.5 2xl:gap-4">
            {
                list ?
                    list?.slice(0, 4).map((i, index) => (
                        <Item path={i.poster_path} title={i.title} key={index} />
                    ))
                    :
                    <LuImageOff className="size-1/3 text-zinc-400 dark:text-zinc-500" />
            }
        </div>
    )
}