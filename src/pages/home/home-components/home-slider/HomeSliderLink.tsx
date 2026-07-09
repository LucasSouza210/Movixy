import { useTranslate } from "../../../../translations/Translations"
import { useEffect, useState } from "react";
import useLang from "../../../../hooks/useLang";
import { getMovieTrailer } from "../../../../services/tmdb/tmdb.services";
import { LuExternalLink, LuBan } from "react-icons/lu";

export default function HomeSliderLink({ id }: { id: number }) {

    const { line } = useTranslate()
    const lang = useLang()

    const [url, setUrl] = useState<string | null>(null)

    useEffect(() => {
        getMovieTrailer(id, lang).then((video) => {
            if (video) {
                setUrl(`https://www.youtube.com/watch?v=${video.key}`)
            }
        })
    }, [id])

    if (!url) {
        return (
            <span className="w-fit h-12 sm:h-14 md:h-16 lg:h-10 xl:h-12 2xl:h-14 flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-1.5 xl:gap-2 2xl:gap-2.5 rounded-2xl sm:rounded-[19px] md:rounded-[22px] lg:rounded-xl xl:rounded-[15px] 2xl:rounded-[18px] font-medium text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base tracking-wider leading-none px-6 sm:px-7 md:px-8 lg:px-5 xl:px-6 2xl:px-7 bg-orange-500 text-white">
                {line('trailerUnavailable')}
                <LuBan className="size-3.5 sm:size-4 md:size-4.5 lg:size-3 xl:size-3.75 2xl:size-4.5" />
            </span>
        )
    }

    return (
        <a className="w-fit h-12 sm:h-14 md:h-16 lg:h-10 xl:h-12 2xl:h-14 flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-1.5 xl:gap-2 2xl:gap-2.5 rounded-2xl sm:rounded-[19px] md:rounded-[22px] lg:rounded-xl xl:rounded-[15px] 2xl:rounded-[18px] font-medium text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base tracking-wider leading-none px-6 sm:px-7 md:px-8 lg:px-5 xl:px-6 2xl:px-7 transition-all duration-300 ease-in-out cursor-pointer bg-orange-500 hover:bg-orange-600 text-white" href={url ?? '#'} target="_blank" rel="noopener noreferrer">
            {line('sliderTrailer')}
            <LuExternalLink className="size-3.5 sm:size-4 md:size-4.5 lg:size-3 xl:size-3.75 2xl:size-4.5" />
        </a>
    )
}