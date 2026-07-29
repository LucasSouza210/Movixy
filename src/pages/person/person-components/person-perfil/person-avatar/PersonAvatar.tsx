import { useImageAlt } from "../../../../../hooks/useImageAlt";
import { FaUser } from "react-icons/fa";
import PersonAvatarSkeleton from "./PersonAvatarSkeleton";

export default function PersonAvatar({ path, name, loading }: { path: string | null | undefined, name: string | undefined, loading: boolean }) {

    const { getImageAlt } = useImageAlt()

    return (
        loading ? <PersonAvatarSkeleton /> :
            <div className="w-2/5 lg:w-full h-fit aspect-2/3 flex items-center justify-center border rounded-3xl sm:rounded-[27px] md:rounded-[30px] lg:rounded-4xl xl:rounded-[38px] 2xl:rounded-[44px] overflow-hidden shrink-0 bg-white dark:bg-zinc-950/50 border-zinc-300 dark:border-zinc-800">
                {
                    path ?
                        <img src={`https://image.tmdb.org/t/p/w500${path}`} alt={getImageAlt(name, 'photo')} loading="lazy" decoding="async" draggable={false} className="size-full object-cover" />
                        :
                        <FaUser className="size-1/3 dark:fill-zinc-300" />

                }
            </div>
    )
}