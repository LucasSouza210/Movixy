import { FaUser } from "react-icons/fa";

export default function UserInfoAvatar({ path, name }: { path: string | undefined | null, name: string | undefined | null }) {
    return (
        <div className={`size-28 flex items-center justify-center rounded-full border border-default overflow-hidden shrink-0 absolute top-0 -translate-y-1/2 bg-black`}>
            {
                path ?
                    <img className="size-full object-cover" src={path} alt={name ?? ''} />
                    :
                    <span className="size-full flex items-center justify-center bg-white dark:bg-zinc-900/60">
                        <FaUser className="size-1/2 fill-zinc-500/70 dark:fill-zinc-600" />
                    </span>
            }
        </div>
    )
}