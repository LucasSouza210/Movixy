import { useImageAlt } from "../../../../../../../hooks/useImageAlt"
import type React from "react"
import type { SetStateAction } from "react"

export default function Poster({ path, title, setFailed }: { path: string | undefined, title: string | undefined, setFailed: React.Dispatch<SetStateAction<boolean>> }) {

    const { getImageAlt } = useImageAlt()

    return (
        <img
            src={`https://image.tmdb.org/t/p/original${path}`}
            alt={getImageAlt(title, 'poster')}
            className="size-full object-cover"
            loading="lazy"
            decoding="async"
            draggable={false}
            onError={() => setFailed(true)}
        />
    )
}