import EpisodeName from "./components/EpisodeName";
import EpisodeOverview from "./components/EpisodeOverview";

export default function EpisodeInfo({ name, overview }: { name: string, overview: string }) {
    return (
        <div className="flex flex-col gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5">
            <EpisodeName name={name} />
            <EpisodeOverview overview={overview} />
        </div>
    )
}