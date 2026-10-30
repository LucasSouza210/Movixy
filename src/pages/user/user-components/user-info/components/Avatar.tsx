import { useImageAlt } from "../../../../../hooks/media/useImageAlt";
import { useImageFallback } from "../../../../../hooks/media/useImageFallback";
import { FaUser } from "react-icons/fa";
import Skeleton from "../../../../../components/ui/Skeleton";

export default function Avatar({ path, name, loading }: { path: string | undefined | null, name: string | null, loading: boolean }) {

    const { getImageAlt } = useImageAlt()

    const { src, onError } = useImageFallback(path)

    return (
        loading ? <Skeleton className="size-28 sm:size-30 md:size-32 lg:size-24 xl:size-27 2xl:size-30 border border-default rounded-full absolute top-0 -translate-y-1/2" />
            :
            <div className={`size-28 sm:size-30 md:size-32 lg:size-26 xl:size-28 2xl:size-30 flex items-center justify-center rounded-full border border-default overflow-hidden shrink-0 absolute top-0 -translate-y-1/2 bg-default`}>
                {
                    src ?
                        <img className="size-full object-cover" src={src} alt={getImageAlt(name, 'avatar')} referrerPolicy="no-referrer" onError={onError} />
                        :
                        <FaUser className="size-1/2 fill-zinc-500 dark:fill-zinc-400" />
                }
            </div>
    )
}