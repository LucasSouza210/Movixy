import { FaUserCircle } from "react-icons/fa";

export default function Avatar({ url }: { url: string | null }) {
    return (
        <div className={`size-12 sm:size-13 md:size-14 flex ${url && 'rounded-full overflow-hidden border border-default'}`}>
            {
                url ?
                    <img src={url} alt="" className="size-full object-cover" />
                    :
                    <FaUserCircle className="size-full fill-zinc-400" />
            }
        </div>
    )
}