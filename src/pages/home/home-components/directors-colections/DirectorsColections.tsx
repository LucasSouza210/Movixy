import { useEffect, useState } from "react";
import { useTranslate } from "../../../../translations/Translations";
import useLang from "../../../../hooks/useLang";
import { getDirectorsColections } from "../../../../services/tmdb/tmdb.services";
import type { Director } from "../../../../types/tmdb";
import DirectorRow from "../../../../components/ui/DirectorRow";

export default function DirectorsColections() {

    const { line } = useTranslate()

    const lang = useLang()

    const [directors, setDirectors] = useState<Director[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function load() {
            setLoading(true)

            const series = await getDirectorsColections(lang)

            await new Promise(resolve => setTimeout(resolve, 500))

            setDirectors(series)
            setLoading(false)
        }

        load()
    }, [lang])

    return (
        <div className="w-full flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-5 xl:gap-6 2xl:gap-7">
            <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-base xl:text-lg 2xl:text-xl tracking-wider leading-none text-zinc-800 dark:text-zinc-200">{line('behindTheCamera')}</p>
            <DirectorRow content={directors} loading={loading} />
        </div>
    )
}