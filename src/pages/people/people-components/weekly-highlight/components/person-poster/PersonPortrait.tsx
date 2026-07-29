import { useImageAlt } from "../../../../../../hooks/useImageAlt";
import { LuImageOff } from "react-icons/lu";

export default function PersonPortrait({ path, name }: { path: string | null | undefined, name: string | undefined }) {

    const { getImageAlt } = useImageAlt()

    return (
        <div className="h-2/5 lg:h-3/4 aspect-2/3 border border-default">
            {
                path ?
                    <img src={`https://image.tmdb.org/t/p/w500${path}`} alt={getImageAlt(name, 'photo')} />
                    :
                    <LuImageOff />
            }
        </div>
    )
}