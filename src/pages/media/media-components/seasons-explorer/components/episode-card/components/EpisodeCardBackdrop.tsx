import { useImageAlt } from "../../../../../../../hooks/useImageAlt";
import { LuImageOff } from "react-icons/lu";

export default function EpisodeCardBackdrop({ path, title }: { path: string | null, title: string | undefined }) {

    const { getImageAlt } = useImageAlt()

    return (
        <div className="w-full aspect-video flex items-center justify-center lg:rounded-4xl xl:rounded-[36px] 2xl:rounded-[40px] overflow-hidden border-b lg:border-none border-default">
            {
                path ?
                    <img src={`https://image.tmdb.org/t/p/original${path}`} alt={getImageAlt(title, 'backdrop')} className="w-full h-auto object-cover" />
                    :
                    <LuImageOff className="size-1/4 lg:size-1/6 text-default" />
            }
        </div>
    )
}