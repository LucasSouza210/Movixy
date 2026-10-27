import type { DirectorMovie } from "../../../../../../types/tmdb";
import { LuImageOff } from "react-icons/lu";
import Item from "./Item";

export default function Collection({ list }: { list: DirectorMovie[] }) {
    return (
        <div className="w-full flex items-center justify-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-2.5 xl:gap-3 2xl:gap-3.5 pt-4 sm:pt-4.5 md:pt-5 lg:pt-3 xl:pt-3.75 2xl:pt-4.5 border-t border-default">
            {
                list ?
                    list?.slice(0, 4).map((i, index) => (
                        <Item path={i.poster_path} title={i.title} key={index} />
                    ))
                    :
                    <LuImageOff className="size-1/3 text-default" />
            }
        </div>
    )
}   