import { useImageAlt } from "../../../../hooks/useImageAlt";
import { FaUserCircle } from "react-icons/fa";

export default function ActorCardAvatar({ path, name }: { path: string | null, name: string | null }) {

    const { getImageAlt } = useImageAlt()

    return (
        <>
            {
                path ?
                    <img src={`https://image.tmdb.org/t/p/w500${path}`} alt={getImageAlt(name, 'photo')} loading="lazy" decoding="async" draggable={false} className="w-full aspect-square object-cover rounded-full border border-default" />
                    :
                    <FaUserCircle className="size-full rounded-full fill-zinc-300 dark:fill-zinc-800" />
            }
        </>
    )
}