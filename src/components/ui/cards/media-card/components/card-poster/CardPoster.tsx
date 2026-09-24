import { useState } from "react";
import type { Media, PersonCredit } from "../../../../../../types/tmdb";
import { LuImageOff } from "react-icons/lu";
import Poster from "./components/Poster";
import PosterActions from "./components/poster-actions/PosterActions";

export default function CardPoster({ media, hideSave }: { media: Media | PersonCredit, hideSave?: boolean }) {

    const [failed, setFailed] = useState(false)

    const path = media.poster_path

    const showImage = path && !failed

    return (
        <div className="w-full aspect-2/3 flex items-center justify-center rounded-[20px] sm:rounded-[25px] md:rounded-[28px] lg:rounded-2xl xl:rounded-[19px] 2xl:rounded-[22px] overflow-hidden relative border border-default bg-white dark:bg-zinc-900/50">
            {
                showImage ?
                    <Poster path={path} title={media.title ?? media.name} setFailed={setFailed} />
                    :
                    <LuImageOff className="size-1/4 text-zinc-400 dark:text-zinc-500" />
            }
            <PosterActions media={media} hideSave={hideSave} />
            <span className={`${showImage && 'size-full absolute z-10 group-hover:bg-black/15'}`} />
        </div>
    )
}