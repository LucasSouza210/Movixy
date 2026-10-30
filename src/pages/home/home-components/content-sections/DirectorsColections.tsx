import { useEffect, useState } from "react";
import useLang from "../../../../hooks/utils/useLang";
import { getDirectors } from "../../../../services/tmdb/person";
import type { Director } from "../../../../types/tmdb";
import ContentRow from "../../../../components/ui/content-row/ContentRow";
import { featuredDirectorsIds } from "../../../../utils/constants";

const itemsPerView = [1, 1, 1, 2]

export default function DirectorsColections() {

    const lang = useLang()

    const [directors, setDirectors] = useState<Director[] | null>(null)

    useEffect(() => {
        async function load() {
            const directors = await getDirectors(featuredDirectorsIds, lang)

            await new Promise(resolve => setTimeout(resolve, 500))

            setDirectors(directors)
        }

        load()
    }, [lang])

    return (
        <ContentRow listStyle='director' title={'behindTheCamera'} content={directors} option="director" itemsPerView={itemsPerView} />
    )
}