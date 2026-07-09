import { FaUserCircle } from "react-icons/fa";

export default function ActorCardAvatar({path, name}: {path: string | null, name: string | null}) {
    return (
        <>
            {
                path ?
                    <img src={`https://image.tmdb.org/t/p/w500${path}`} alt={name ?? 'unknown'} loading="lazy" decoding="async" draggable={false} className="w-full aspect-square object-cover rounded-full border border-default" />
                    :
                    <FaUserCircle className="size-full rounded-full fill-zinc-300 dark:fill-zinc-800" />
            }
        </>
    )
}