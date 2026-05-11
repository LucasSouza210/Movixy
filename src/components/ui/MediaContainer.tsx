import type { Media } from "../../pages/home/home-components/home-slider/HomeSlider";
import type { Actor } from "../../types/tmdb";
import ActorRow from "./ActorRow";
import MediaRow from "./MediaRow";

export default function MediaContainer({ title, list, actors }: { title: string, list: Media[] | Actor[], actors?: boolean }) {
    return (
        <div className="w-full flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-5 xl:gap-6 2xl:gap-7">
            <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-base xl:text-lg 2xl:text-xl tracking-wider leading-none text-zinc-800 dark:text-zinc-200">{title}</p>
            {
                actors ?
                    <ActorRow content={list as Actor[]}/>
                    :
                    <MediaRow content={list as Media[]} />
            }
        </div>
    )
}