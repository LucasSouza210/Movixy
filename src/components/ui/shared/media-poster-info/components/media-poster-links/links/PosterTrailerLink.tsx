import { useEffect, useState } from "react";
import { useTranslate } from "../../../../../../../translations/Translations";
import { getMediaTrailer } from "../../../../../../../services/tmdb/tmdb.services";
import { FaPlay } from "react-icons/fa";
import { LuBan } from "react-icons/lu";
import useLang from "../../../../../../../hooks/useLang";

export default function PosterTrailerLink({ id, type }: { id: number | undefined, type: string | undefined }) {

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

    if (!url) {
        return (
            <span className="w-fit h-12 sm:h-14 md:h-16 lg:h-10 xl:h-12 2xl:h-14 flex items-center justify-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 rounded-2xl sm:rounded-[19px] md:rounded-[22px] lg:rounded-xl xl:rounded-[15px] 2xl:rounded-[18px] font-medium text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base tracking-wider leading-none px-6 sm:px-7 md:px-8 lg:px-5 xl:px-6 2xl:px-7 bg-orange-500 text-white">
                {line('unavailable')}
                <LuBan className="size-3.5 sm:size-4 md:size-4.5 lg:size-3 xl:size-3.5 2xl:size-4" />
            </span>
        )
    }

    return (
        <a className={`w-fit h-12 sm:h-14 md:h-16 lg:h-10 xl:h-12 2xl:h-14 flex items-center justify-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 rounded-2xl sm:rounded-[19px] md:rounded-[22px] lg:rounded-xl xl:rounded-[15px] 2xl:rounded-[18px] font-medium text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base tracking-wider leading-none px-6 sm:px-7 md:px-8 lg:px-5 xl:px-6 2xl:px-7 transition-all duration-300 ease-in-out bg-orange-500 text-white ${url ? 'cursor-pointer hover:bg-orange-600' : 'cursor-not-allowed'}`} href={url} target="_blank" rel="noopener noreferrer">
            {line(url ? 'sliderTrailer' : 'trailerUnavailable')}
            <FaPlay className="size-3 sm:size-3.5 md:size-4 lg:size-2.5 xl:size-3 2xl:size-3.5" />
        </a>
    )
}