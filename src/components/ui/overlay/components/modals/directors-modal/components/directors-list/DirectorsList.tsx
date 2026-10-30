import { useEffect, useState } from "react"
import type { Director } from "../../../../../../../../types/tmdb"
import { getDirectors } from "../../../../../../../../services/tmdb/person"
import useLang from "../../../../../../../../hooks/utils/useLang"
import LimitedRowsScroll from "../../../../../../scrolls/LimitedRowsScroll"
import DirectorCardSkeleton from "../../../../../../cards/director-card/DirectorCardSkeleton"
import DirectorCard from "../../../../../../cards/director-card/DirectorCard"

const columnsPerView = [1]
const rowsPerView = [2, 2, 2, 2]
const gapPerBreakpoint = [4, 4.5, 5, 4, 4.5, 5]

export default function DirectorsList({ directorsIds }: { directorsIds: number[] }) {

    const lang = useLang()

    const [directors, setDirectors] = useState<Director[] | null>(null)

    const loading = directors == null

    useEffect(() => {

        async function load() {

            const directors = await getDirectors(directorsIds, lang)

            await new Promise(resolve => setTimeout(resolve, 500))

            setDirectors(directors)
        }

        load()

    }, [lang])

    return (
        <LimitedRowsScroll className="w-full" columnsPerView={columnsPerView} rowsPerView={rowsPerView} gapPerBreakpoint={gapPerBreakpoint}>
            {
                (directors ?? Array.from({ length: 3 })).map((i, index) => (
                    loading ? <DirectorCardSkeleton compact key={index} />
                        :
                        <DirectorCard director={i} compact key={index} />
                ))
            }
        </LimitedRowsScroll>
    )
}