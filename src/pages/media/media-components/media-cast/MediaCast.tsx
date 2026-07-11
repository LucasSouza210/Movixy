import { useTranslate } from "../../../../translations/Translations";
import { useEffect, useState } from "react";
import useLang from "../../../../hooks/useLang";
import ContentRow from "../../../../components/ui/content-row/ContentRow";
import { getMediaCast } from "../../../../services/tmdb/tmdb.services";
import type { CastMember } from "../../../../types/tmdb";

export default function MediaCast({ mediaType, id }: { mediaType: string | undefined, id: string | undefined }) {

    const lang = useLang()
    const { line } = useTranslate()

    const [cast, setCast] = useState<CastMember[] | null>(null)

    useEffect(() => {
        async function load() {
            if (!mediaType || !id) return

            const cast = await getMediaCast(mediaType, id, lang)

            await new Promise(resolve => setTimeout(resolve, 500))

            setCast(cast)
        }

        load()
    }, [mediaType, id, lang])

    return (
        <ContentRow className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6" content={cast} option="cast" itemsPerView={[3, 3, 3, 6]} gapPerBreakpoint={[4, 5, 6, 4, 5, 6]} scrollBarHeight={[2, 2.25, 2.5, 2, 2.25, 2.5]}>
            <p className="font-medium text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl tracking-wider md:tracking-widest lg:tracking-wider leading-none text-black dark:text-white">{line('mediaCast')}</p>
        </ContentRow>
    )
}