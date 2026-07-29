import { useImageAlt } from "../../../../../../hooks/useImageAlt";
import { LuImageOff } from "react-icons/lu";

export default function CollectionPosterItem({ path, title }: { path: string | null, title: string }) {

    const { getImageAlt } = useImageAlt()

    return (
        <div className="size-full flex items-center justify-center">
            {
                path ?
                    <img src={`https://image.tmdb.org/t/p/original${path}`} alt={getImageAlt(title, 'poster')} className="size-full object-cover" />
                    :
                    <LuImageOff className="size-1/3 text-zinc-400 dark:text-zinc-500" />
            }
        </div>
    )
}