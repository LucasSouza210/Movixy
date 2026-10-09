import { useImageAlt } from "../../../../../../hooks/useImageAlt";
import { LuImageOff } from "react-icons/lu";

export default function CollectionPosterItem({ path, title }: { path: string | null, title: string }) {

    const { getImageAlt } = useImageAlt()

    return (
        <div className="w-full aspect-2/3 flex items-center justify-center rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[11px] 2xl:rounded-xl border overflow-hidden border-default">
            {
                path ?
                    <img src={`https://image.tmdb.org/t/p/original${path}`} alt={getImageAlt(title, 'poster')} className="size-full object-cover" />
                    :
                    <LuImageOff className="size-1/3 text-default" />
            }
        </div>
    )
}