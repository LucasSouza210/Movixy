import { useImageAlt } from "../../../../../../../hooks/media/useImageAlt"

export default function Backdrop({ path, title }: { path: string, title: string | undefined }) {

    const { getImageAlt } = useImageAlt()

    return (
        <div className="size-full shrink-0 relative overflow-hidden">
            {
                path ?
                    <img src={`https://image.tmdb.org/t/p/original${path}`} alt={getImageAlt(title, 'backdrop')} className="size-full object-cover" />
                    :
                    <span className="flex items-center justify-center absolute inset-0 bg-linear-to-br from-zinc-100 via-zinc-300 to-zinc-100 dark:from-zinc-700 dark:via-zinc-800 dark:to-zinc-700" />
            }
        </div>
    )
}