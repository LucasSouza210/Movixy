import { useTranslate } from "../../../../../../translations/Translations";
import { LuImageOff } from "react-icons/lu";

export default function CollectionPosterItem({ path, title }: { path: string | null, title: string }) {

    const { line } = useTranslate()

    return (
        <div className="size-full flex items-center justify-center">
            {
                path ?
                    <img src={`https://image.tmdb.org/t/p/original${path}`} alt={title ?? line('notInformed')} className="size-full object-cover" />
                    :
                    <LuImageOff className="size-1/3 text-zinc-400 dark:text-zinc-500" />
            }
        </div>
    )
}