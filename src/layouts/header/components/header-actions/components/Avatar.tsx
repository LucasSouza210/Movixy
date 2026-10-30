import { useUserInfo } from "../../../../../hooks/data/useUserInfo";
import { useImageAlt } from "../../../../../hooks/media/useImageAlt";
import { useImageFallback } from "../../../../../hooks/media/useImageFallback";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function Avatar() {

    const { avatarUrl, name } = useUserInfo()

    const { getImageAlt } = useImageAlt()

    const { src, onError } = useImageFallback(avatarUrl)

    return (
        <Link to='/user' className={`flex size-6 sm:size-6.5 md:size-7 lg:size-7 xl:size-8 2xl:size-9 ${src ? 'border border-default rounded-full overflow-hidden' : ''}`}>
            {
                src ?
                    <img src={src} alt={getImageAlt(name, 'avatar')} referrerPolicy="no-referrer" onError={onError} className="size-full object-cover" />
                    :
                    <FaUserCircle className="size-full fill-zinc-400" />
            }
        </Link>
    )
}