import { FaUserCircle } from "react-icons/fa";

export default function DirectorAvatar({ path, name }: { path: string | null, name: string | null }) {
    return (
        <div className="h-3/6 aspect-square flex">
            {
                path ?
                    <img src={`https://image.tmdb.org/t/p/w500${path}`} alt={name?.trim() || 'Undefined'} loading="lazy" decoding="async" draggable={false} className="size-full object-cover rounded-full" />
                    :
                    <FaUserCircle className="size-full rounded-full fill-zinc-300 dark:fill-zinc-600" />
            }
        </div>
    )
}