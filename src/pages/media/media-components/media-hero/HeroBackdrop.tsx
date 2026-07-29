import { useImageAlt } from "../../../../hooks/useImageAlt"

export default function HeroBackdrop({ path, title }: { path: string, title: string | undefined }) {

    const { getImageAlt } = useImageAlt()

    return (
        <div className="w-full aspect-15/9 shrink-0 bg-linear-to-br relative overflow-hidden">
            {
                path ?
                    <img src={`https://image.tmdb.org/t/p/original${path}`} alt={getImageAlt(title, 'backdrop')} className="size-full object-cover" />
                    :
                    <span className="flex items-center justify-center absolute inset-0 bg-linear-to-br from-zinc-100 via-zinc-300 to-zinc-100 dark:from-zinc-700 dark:via-zinc-800 dark:to-zinc-700" />
            }
        </div>
    )
}