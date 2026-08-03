import { useImageAlt } from "../../../../../../hooks/useImageAlt";
import { LuImageOff } from "react-icons/lu";

export default function PersonPortrait({ path, name }: { path: string | null | undefined, name: string | undefined }) {

    const { getImageAlt } = useImageAlt()

    return (
        <div className="w-[45%] h-fit lg:h-3/4 aspect-2/3 border border-default rounded-2xl 2xl:rounded-3xl overflow-hidden">
            {
                path ?
                    <img src={`https://image.tmdb.org/t/p/w500${path}`} alt={getImageAlt(name, 'photo')} className="size-full object-cover"/>
                    :
                    <LuImageOff />
            }
        </div>
    )
}