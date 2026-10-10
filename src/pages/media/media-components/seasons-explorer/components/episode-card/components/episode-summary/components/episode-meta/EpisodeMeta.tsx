import Rate from "./components/Rate";
import Release from "./components/Release";

export default function EpisodeMeta({ season, episodeNumber, airDate, rating }: { season: number, episodeNumber: number, airDate: string | undefined, rating: number }) {
    return (
        <div className="w-full max-w-max flex items-center gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-7 2xl:gap-8">
            <Release season={season} episodeNumber={episodeNumber} airDate={airDate} />
            <Rate rating={rating} />
        </div>
    )
}