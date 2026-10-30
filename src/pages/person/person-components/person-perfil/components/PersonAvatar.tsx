import { useImageAlt } from "../../../../../hooks/media/useImageAlt";
import { FaUser } from "react-icons/fa";
import Skeleton from "../../../../../components/ui/Skeleton";

export default function PersonAvatar({ path, name, loading }: { path: string | null | undefined, name: string | undefined, loading: boolean }) {

    const { getImageAlt } = useImageAlt()

    return (
        loading ? <Skeleton className="w-2/5 lg:w-full aspect-2/3 shrink-0 rounded-2xl sm:rounded-[20px] md:rounded-3xl lg:rounded-[20px] xl:rounded-[22px] 2xl:rounded-3xl" />
            :
            <div className="w-2/5 lg:w-full h-fit aspect-2/3 flex items-center justify-center border rounded-2xl sm:rounded-[20px] md:rounded-3xl lg:rounded-[20px] xl:rounded-[22px] 2xl:rounded-3xl overflow-hidden shrink-0 bg-default border-default">
                {
                    path ?
                        <img src={`https://image.tmdb.org/t/p/w500${path}`} alt={getImageAlt(name, 'photo')} loading="lazy" decoding="async" draggable={false} className="size-full object-cover" />
                        :
                        <FaUser className="size-1/3 dark:fill-zinc-300" />

                }
            </div>
    )
}