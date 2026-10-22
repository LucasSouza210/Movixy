import { useState } from "react"
import { useImageAlt } from "../../../../../hooks/useImageAlt"
import { FaUser } from "react-icons/fa"

export default function PersonCardAvatar({ path, name }: { path: string | null, name: string | null }) {
    
    const { getImageAlt } = useImageAlt()
    const [failed, setFailed] = useState(false)

    const showImage = path && !failed

    return (
        <div className="w-full aspect-square flex items-center justify-center border rounded-full overflow-hidden relative bg-default border-default">
            {
                showImage ?
                    <img src={`https://image.tmdb.org/t/p/w500${path}`} alt={getImageAlt(name, 'photo')} loading="lazy" decoding="async" draggable={false} onError={() => setFailed(true)} className="size-full object-cover rounded-full" />
                    :
                    <FaUser className="size-2/5 fill-zinc-400" />
            }
            {
                showImage &&
                <span className="size-full absolute z-10 group-hover:bg-black/15" />
            }
        </div>
    )
}