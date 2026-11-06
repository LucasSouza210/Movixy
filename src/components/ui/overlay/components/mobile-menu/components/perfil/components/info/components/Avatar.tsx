import { FaUserCircle } from "react-icons/fa";

export default function Avatar({ url }: { url: string | null }) {
    return (
        <div className={`w-1/4 aspect-square flex ${url && 'rounded-full overflow-hidden border border-default'}`}>
            {
                url ?
                    <img src={url} alt="" className="size-full object-cover" />
                    :
                    <FaUserCircle className="size-full fill-zinc-400" />
            }
        </div>
    )
}