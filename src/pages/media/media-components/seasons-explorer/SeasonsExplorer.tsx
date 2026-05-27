import type { Media, Season } from "../../../../types/tmdb";
import SeasonsListLink from "./SeasonsListLink";
import SeasonsResume from "./seasons-resume/SeasonsResume";
import SeasonExplorerProvider from "../../../../contexts/SeasonExplorerProvider";
import EpisodeCard from "./seasons-resume/episode-slider/EpisodeCard";

function ExplorerWrapper({ media, seasons }: { media: Media, seasons: Season[] | undefined }) {
    return (
        <SeasonExplorerProvider media={media}>
            <SeasonsExplorer seasons={seasons} />
        </SeasonExplorerProvider>
    )
}

function SeasonsExplorer({ seasons }: { seasons: Season[] | undefined }) {


    return (
        <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-3">
            <div className="flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-3">
                <SeasonsListLink />
                <SeasonsResume seasons={seasons} />
            </div>
            <EpisodeCard />
        </div>
    )
}

export default ExplorerWrapper