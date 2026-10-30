import { useImageAlt } from "../../../../../../../hooks/media/useImageAlt";
import { useImageFallback } from "../../../../../../../hooks/media/useImageFallback";
import { FaUserCircle } from "react-icons/fa";

export default function DirectorAvatar({ path, name, compact }: { path: string | null, name: string | null, compact?: boolean }) {

    const { getImageAlt } = useImageAlt()

    const { src, onError } = useImageFallback(path ? `https://image.tmdb.org/t/p/w500${path}` : null)

    return (
        <div className={`w-fit h-full flex rounded-[10px] sm:rounded-[13px] md:rounded-2xl lg:rounded-[10px] xl:rounded-xl 2xl:rounded-[14px] overflow-hidden shrink-0 ${src ? 'border border-default' : ''} ${compact ? 'aspect-2/3' : 'aspect-3/4'}`}>
            {
                src ?
                    <img src={src} alt={getImageAlt(name, 'photo')} loading="lazy" decoding="async" draggable={false} onError={onError} className="size-full object-cover" />
                    :
                    <FaUserCircle className="size-full rounded-full fill-zinc-300 dark:fill-zinc-600" />
            }
        </div>
    )
}