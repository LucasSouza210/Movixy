import { useEffect, useState } from "react";
import { useTranslate } from "../../../../../translations/Translations";
import { getMediaTrailer } from "../../../../../services/tmdb/tmdb.services";
import { FaPlay, FaBan } from "react-icons/fa";
import useLang from "../../../../../hooks/useLang";

export default function MediaTrailerLink({ id, type }: { id: number | undefined, type: string | undefined }) {

    const { line } = useTranslate()

    const lang = useLang()

    const [url, setUrl] = useState<string | null>(null)

    useEffect(() => {

        if (!id) return

        getMediaTrailer(id, type, lang).then((video) => {
            if (video) {
                setUrl(`https://www.youtube.com/watch?v=${video.key}`)
            }
        })
    }, [id])

    if (!id) {
        return (
            <span className="h-12 sm:h-13 md:h-14 lg:h-8 xl:h-10 2xl:h-12 flex items-center gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-1 xl:gap-1.5 2xl:gap-2 font-medium text-sm sm:text-[15px] md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm tracking-wider lg:tracking-wide leading-none px-4 sm:px-4.5 md:px-5 lg:px-3 xl:px-4 2xl:px-5 rounded-[14px] sm:rounded-[15px] md:rounded-2xl lg:rounded-[10px] xl:rounded-xl 2xl:rounded-[14px] transition-all duration-300 ease-in-out cursor-not-allowed bg-orange-500 dark:bg-orange-600 text-zinc-100">
                {line('unavailable')}
                <FaBan className="size-3 sm:size-3.25 md:size-3.5 lg:size-2 xl:size-2.5 2xl:size-3" />
            </span>
        )
    }

    return (
        <a className="h-12 sm:h-13 md:h-14 lg:h-8 xl:h-10 2xl:h-12 flex items-center gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-1 xl:gap-1.5 2xl:gap-2 font-medium text-sm sm:text-[15px] md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm tracking-wider lg:tracking-wide leading-none px-4 sm:px-4.5 md:px-5 lg:px-3 xl:px-4 2xl:px-5 rounded-[14px] sm:rounded-[15px] md:rounded-2xl lg:rounded-[10px] xl:rounded-xl 2xl:rounded-[14px] transition-all duration-300 ease-in-out cursor-pointer bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-500 text-zinc-100 hover:text-white" href={url ?? '#'} target="_blank" rel="noopener noreferrer">
            {line('mediaTrailer')}
            <FaPlay className="size-2.5 sm:size-2.75 md:size-3 lg:size-1.5 xl:size-2 2xl:size-2.5" />
        </a>
    )
}