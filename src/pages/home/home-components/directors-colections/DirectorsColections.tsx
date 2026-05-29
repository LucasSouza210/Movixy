import { useEffect, useState } from "react";
import DirectorContainer from "../../../../components/ui/DirectorContainer";
import { useTranslate } from "../../../../translations/Translations";
import useLang from "../../../../hooks/useLang";
import { getDirectorsColections } from "../../../../services/tmdb/tmdb.services";
import type { Director } from "../../../../types/tmdb";

export default function DirectorsColections() {

    const { line } = useTranslate()

    const lang = useLang()

    const [directors, setDirectors] = useState<Director[]>([])

    useEffect(() => {
        getDirectorsColections(lang).then(setDirectors)
    }, [lang])

    return (
        <DirectorContainer title={line('behindTheCamera')} list={directors} />
    )
}