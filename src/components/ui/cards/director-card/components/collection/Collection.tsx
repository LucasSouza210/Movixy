import type { DirectorMovie } from "../../../../../../types/tmdb";
import { LuImageOff } from "react-icons/lu";
import Item from "./Item";

export default function Collection({ list }: { list: DirectorMovie[] }) {
    return (
        <div className="w-full flex items-center justify-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-3.5 2xl:gap-4 pt-4 sm:pt-5 md:pt-6 lg:pt-3.5 xl:pt-4.5 2xl:pt-5.5 border-t border-default">
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