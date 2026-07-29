import { useImageAlt } from "../../../../../hooks/useImageAlt";
import { FaUserCircle } from "react-icons/fa";

export default function CastCardAvatar({ path, name }: { path: string | null, name: string }) {

    const { getImageAlt } = useImageAlt()

    return (
        <div className={`w-full aspect-square flex rounded-full overflow-hidden ${path && 'border border-default'}`}>
            {
                path ?
                    <img src={`https://image.tmdb.org/t/p/w500${path}`} alt={getImageAlt(name, 'photo')} loading="lazy" decoding="async" draggable={false} className="size-full object-cover" />
                    :
                    <FaUserCircle className="size-full rounded-full fill-zinc-300 dark:fill-zinc-800" />
            }
        </div>
    )
}