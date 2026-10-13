import { useImageAlt } from "../../../../../../../hooks/useImageAlt";
import { FaUserCircle } from "react-icons/fa";

export default function DirectorAvatar({ path, name }: { path: string | null, name: string | null }) {

    const { getImageAlt } = useImageAlt()

    return (
        <div className={`w-fit h-full aspect-3/4 flex rounded-[10px] sm:rounded-xl md:rounded-[14px] lg:rounded-[10px] xl:rounded-xl 2xl:rounded-[14px] overflow-hidden shrink-0 ${path && 'border border-default'}`}>
            {
                path ?
                    <img src={`https://image.tmdb.org/t/p/w500${path}`} alt={getImageAlt(name, 'photo')} loading="lazy" decoding="async" draggable={false} className="size-full object-cover" />
                    :
                    <FaUserCircle className="size-full rounded-full fill-zinc-300 dark:fill-zinc-600" />
            }
        </div>
    )
}