export default function SearchCardImage({ path, title, isMedia }: { path: string | null, title: string | undefined, isMedia: boolean | undefined }) {

    const src = isMedia ? `https://image.tmdb.org/t/p/original${path}` : `https://image.tmdb.org/t/p/w500${path}`

    return (
        <img src={src} alt={title ?? 'unknown'} loading="lazy" decoding="async" draggable={false} className="aspect-2/3 h-full object-cover border border-default rounded-xl" />
    )
}