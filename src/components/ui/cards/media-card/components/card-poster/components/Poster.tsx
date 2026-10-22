import { useImageAlt } from "../../../../../../../hooks/useImageAlt"

export default function Poster({ src, title, onError }: { src: string, title: string | undefined, onError: () => void }) {

    const { getImageAlt } = useImageAlt()

    return (
        <img src={src} alt={getImageAlt(title, 'poster')} className="size-full object-cover" loading="lazy" decoding="async" draggable={false} onError={onError} />
    )
}