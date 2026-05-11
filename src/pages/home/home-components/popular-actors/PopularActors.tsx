import { useEffect, useState } from "react";
import MediaContainer from "../../../../components/ui/MediaContainer";
import { useTranslate } from "../../../../translations/Translations";
import useLang from "../../../../hooks/useLang";
import { getPopularActors } from "../../../../services/movies/movies.services";
import type { Actor } from "../../../../types/tmdb";

export default function PopularActors() {

    const { line } = useTranslate()

    const lang = useLang()

    const [actors, setActors] = useState<Actor[]>([])

    useEffect(() => {
        getPopularActors(lang).then(setActors)
    }, [lang])

    return (
        <MediaContainer title={line('popularActors')} list={actors} actors />
    )
}