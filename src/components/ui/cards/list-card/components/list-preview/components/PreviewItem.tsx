import { useImageAlt } from "../../../../../../../hooks/useImageAlt";
import { LuImageOff } from "react-icons/lu";

export default function PreviewItem({ path, title }: { path: string | null | undefined, title: string | null | undefined }) {

    const { getImageAlt } = useImageAlt()

    return (
        <div className="w-full aspect-2/3 flex items-center justify-center border border-default rounded-[10px] sm:rounded-xl md:rounded-[14px] lg:rounded-[10px] xl:rounded-xl 2xl:rounded-[14px] overflow-hidden">
            {
                path ?
                    <img src={`https://image.tmdb.org/t/p/original${path}`} alt={getImageAlt(title, 'poster')} className="size-full object-cover" loading="lazy" decoding="async" draggable={false} />
                    :
                    <LuImageOff className="size-1/4 fill-zinc-500 dark:fill-zinc-400" />
            }
        </div>
    )
}