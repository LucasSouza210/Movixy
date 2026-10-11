import { useEffect, useState } from "react";
import { useTranslate } from "../../../../../../../translations/Translations";
import { getMediaTrailer } from "../../../../../../../services/tmdb/media";
import { FaPlay, FaBan } from "react-icons/fa";
import useLang from "../../../../../../../hooks/useLang";

export default function MediaTrailerLink({ id, type }: { id: number | undefined, type: string | undefined }) {

    const { line } = useTranslate()

    const lang = useLang()

    const [url, setUrl] = useState<string | null>(null)

    const Icon = id ? FaPlay : FaBan

    useEffect(() => {

        if (!id) return

        getMediaTrailer(id, type, lang).then((video) => {
            if (video) {
                setUrl(`https://www.youtube.com/watch?v=${video.key}`)
            }
        })
    }, [id])

    return (
        <a className={`h-12 sm:h-13 md:h-14 lg:h-8 xl:h-10 2xl:h-12 flex items-center justify-center gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-1 xl:gap-1.5 2xl:gap-2 font-medium text-sm sm:text-[15px] md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm tracking-wider lg:tracking-wide leading-none rounded-[10px] sm:rounded-[11px] md:rounded-xl lg:rounded-md xl:rounded-lg 2xl:rounded-[10px] text-zinc-100 ${id ? 'aspect-2/1 action-brand hover:text-white' : 'px-4 sm:px-4.5 md:px-5 lg:px-3 xl:px-4 2xl:px-5 cursor-not-allowed bg-orange-500'}`} href={url ?? '#'} target="_blank" rel="noopener noreferrer">
            {line(id ? 'mediaTrailer' : 'unavailable')}
            <Icon className="size-2.5 sm:size-2.75 md:size-3 lg:size-1.5 xl:size-2 2xl:size-2.5" />
        </a>
    )
}