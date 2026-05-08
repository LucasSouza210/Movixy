import MediaContainer from "../../../../components/ui/MediaContainer"
import { useTranslate } from "../../../../translations/Translations"
import TrendingMoviesRow from "./TrendingMoviesRow"

export default function TrendingMovies() {

    const { line } = useTranslate()

    return (
        <MediaContainer>
            <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-base xl:text-lg 2xl:text-xl tracking-wider leading-none text-zinc-800 dark:text-zinc-200">{line('trendingMovies')}</p>
            <TrendingMoviesRow />
        </MediaContainer>
    )
}