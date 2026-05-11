import { FaUserCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import useActorInfo from "../../hooks/useActorInfo";
import type { Actor } from "../../types/tmdb";
import { differenceInYears, parseISO, format } from "date-fns";
import { useTranslate } from "../../translations/Translations";

export default function ActorCard({ actor }: { actor: Actor }) {

    const liked = false
    const style = `${liked ? 'fill-red-500' : 'fill-zinc-400 dark:fill-zinc-500'} size-1/2`

    const { info } = useActorInfo(actor.id)
    const { line } = useTranslate()


    const age = actor.birthday ? differenceInYears(new Date(), parseISO(actor.birthday)) : ''
    const country = actor.place_of_birth?.split(", ").pop()

    return (
        <div className="shrink-0 flex flex-col items-center gap-4">
            <div className="w-full aspect-square rounded-full relative">
                {
                    actor.profile_path ?
                        <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} loading="lazy" decoding="async" draggable={false} className="w-full aspect-square object-cover rounded-full" />
                        :
                        <FaUserCircle className="size-full rounded-full fill-zinc-300 dark:fill-zinc-800" />
                }
                <button className="size-7 flex items-center justify-center border rounded-full absolute bottom-0 right-0 backdrop-blur-[2px] bg-white/30 dark:bg-zinc-900/30 border-zinc-200 dark:border-zinc-800">
                    {
                        liked ?
                            <FaHeart className={style} />
                            :
                            <FaRegHeart className={style} />
                    }
                </button>
            </div>
            <div className="flex flex-col items-center gap-2">
                <p className="w-fit text-center font-medium text-sm tracking-wider leading-5 text-black dark:text-white">{actor.name}</p>
                <p className="font-medium text-xs tracking-wide leading-none text-zinc-700 dark:text-zinc-300">{`${actor.birthday && format(parseISO(actor.birthday), "yyyy")} (${age})`}</p>
                <p className="font-medium text-xs tracking-wide leading-none text-zinc-700 dark:text-zinc-300">{info?.cast?.length} {line('projects')}</p>
            </div>
        </div>
    )
}