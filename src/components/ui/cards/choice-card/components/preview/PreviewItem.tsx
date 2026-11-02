export default function PreviewItem({ path }: { path: string | null }) {
    return (
        <img className="size-full object-cover" src={`https://image.tmdb.org/t/p/w185${path}`} alt="" />
    )
}