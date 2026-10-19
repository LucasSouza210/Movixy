import { useTranslate } from "../../../../../../../../translations/Translations";
import { FaUser } from "react-icons/fa";
import AvatarSkeleton from "./AvatarSkeleton";

export default function Avatar({ path, loading }: { path: string | undefined | null, loading: boolean }) {

    const { line } = useTranslate()

    return (
        loading ? <AvatarSkeleton />
            :
            <div className={`size-28 sm:size-30 md:size-32 lg:size-26 xl:size-28 2xl:size-30 flex items-center justify-center rounded-full border border-default overflow-hidden shrink-0 absolute top-0 -translate-y-1/2 bg-default`}>
                {
                    path ?
                        <img className="size-full object-cover" src={path} alt={line('profilePhoto')} />
                        :
                        <FaUser className="size-1/2 fill-zinc-500 dark:fill-zinc-400" />
                }
            </div>
    )
}