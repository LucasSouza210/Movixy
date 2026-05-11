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

    return (
        <div className="shrink-0 flex flex-col items-center gap-4 sm:gap-4.5 md:gap-5 lg:gap-4 xl:gap-4.5 2xl:gap-5">
            <div className="w-full aspect-square rounded-full relative">
                {
                    actor.profile_path ?
                        <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} loading="lazy" decoding="async" draggable={false} className="w-full aspect-square object-cover rounded-full" />
                        :
                        <FaUserCircle className="size-full rounded-full fill-zinc-300 dark:fill-zinc-800" />
                }
                <button className="size-7 sm:size-8 md:size-9 lg:size-7 xl:size-8 2xl:size-9 flex items-center justify-center border rounded-full absolute bottom-0 sm:bottom-px md:bottom-0.5 lg:bottom-0 xl:bottom-0.5 2xl:bottom-1 right-0 sm:right-px md:right-0.5 lg:right-0 xl:right-0.5 2xl:right-1 backdrop-blur-[2px] bg-white/30 dark:bg-zinc-900/30 border-zinc-200 dark:border-zinc-800">
                    {
                        liked ?
                            <FaHeart className={style} />
                            :
                            <FaRegHeart className={style} />
                    }
                </button>
            </div>
            <div className="flex flex-col items-center gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-2 xl:gap-2.25 2xl:gap-2.5">
                <p className="w-fit text-center font-medium text-sm sm:-[15px] md:text-base lg:text-sm xl:text-base 2xl:text-lg tracking-wider leading-5 sm:leading-5.5 md:leading-6 lg:leading-5 xl:leading-5.75 2xl:leading-6.5 text-black dark:text-white">{actor.name}</p>
                <p className="font-medium text-xs sm:text-[13px] md:text-sm lg:text-xs xl:text-[13px] 2xl:text-sm tracking-wide leading-none text-zinc-700 dark:text-zinc-300">{`${actor.birthday && format(parseISO(actor.birthday), "yyyy")} (${age})`}</p>
                <p className="font-medium text-xs sm:text-[13px] md:text-sm lg:text-xs xl:text-[13px] 2xl:text-sm tracking-wide leading-none text-zinc-700 dark:text-zinc-300">{info?.cast?.length} {line('projects')}</p>
            </div>
        </div>
    )
}