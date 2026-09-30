import { useEffect, useState } from "react";
import { getPersonDetails } from "../../../../../../../services/tmdb/person";
import type { SearchContent } from "../../../../../../../types/tmdb";
import { FaStar } from "react-icons/fa";
import formatRate from "../../../../../../../utils/tmdb/formatRate";
import useLang from "../../../../../../../hooks/useLang";
import filterCredits from "../../../../../../../utils/tmdb/filterCredits";

export default function ContentInfo({ content }: { content: SearchContent }) {

    const lang = useLang()

    const [rate, setRate] = useState<number | null>(null)

    useEffect(() => {
        let ignore = false

        async function load() {
            switch (content.media_type) {
                case "movie": {
                    setRate(content.vote_average ?? null)
                    return
                }
                case "tv": {
                    setRate(content.vote_average ?? null)
                    return
                }
                case "person": {
                    try {
                        const person = await getPersonDetails(String(content.id), lang)
                        const list = filterCredits([
                            ...person.combined_credits.cast,
                            ...person.combined_credits.crew
                        ])

                        const totalVotes = list.reduce((acc, item) => acc + (item.vote_count ?? 0), 0)

                        const averageRating = totalVotes > 0 ? list.reduce((acc, item) => acc + (item.vote_average ?? 0) * (item.vote_count ?? 0), 0) / totalVotes : null

                        if (!ignore) setRate(averageRating)
                    }
                    catch (error) {
                        console.error("Failed to fetch person details:", error)
                        if (!ignore) setRate(null)
                    }
                    return
                }
            }
        }

        load()

        return () => {
            ignore = true
        }
    }, [content, lang])

    return (
        <span className="aspect-19/10 h-6 sm:h-7 md:h-8 lg:h-6 xl:h-7 2xl:h-8 flex items-center justify-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 text-[10px] sm:text-[11px] md:text-xs lg:text-[10px] xl:text-[11px] 2xl:text-xs border border-default rounded-full card-badge leading-none text-zinc-500 dark:text-zinc-200">
            <FaStar className="size-2 sm:size-2.25 md:size-2.5 lg:size-2 xl:size-2.25 2xl:size-2.5 fill-yellow-400" />
            {rate ? formatRate(rate) : 'N/A'}
        </span>
    )
}