import { useTranslate } from "../../../../../../../translations/Translations";
import { FaUser } from "react-icons/fa";

export default function UserInfoAvatar({ path }: { path: string | undefined | null }) {

    const { line } = useTranslate()

    return (
        <div className={`size-28 sm:size-30 md:size-32 lg:size-24 xl:size-27 2xl:size-30 flex items-center justify-center rounded-full border border-default overflow-hidden shrink-0 absolute top-0 -translate-y-1/2 bg-black`}>
            {
                path ?
                    <img className="size-full object-cover" src={path} alt={line('profilePhoto')} />
                    :
                    <span className="size-full flex items-center justify-center bg-white dark:bg-zinc-900/60">
                        <FaUser className="size-1/2 fill-zinc-500/70 dark:fill-zinc-600" />
                    </span>
            }
        </div>
    )
}