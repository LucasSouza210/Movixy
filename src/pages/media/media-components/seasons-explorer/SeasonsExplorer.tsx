import type { Media, Season } from "../../../../types/tmdb";
import SeasonsListLink from "./SeasonsListLink";
import SeasonsResume from "./seasons-resume/SeasonsResume";
import SeasonExplorerProvider from "../../../../contexts/SeasonExplorerProvider";
import EpisodeCard from "./seasons-resume/episode-card/EpisodeCard";
import SeasonsExplorerSkeleton from "./SeasonsExplorerSkeleton";

function ExplorerWrapper({ media, seasons, loading }: { media: Media | null, seasons: Season[] | undefined, loading: boolean }) {
    return (
        loading || !media ?
            <SeasonsExplorerSkeleton />
            :
            <SeasonExplorerProvider media={media}>
                <SeasonsExplorer seasons={seasons} />
            </SeasonExplorerProvider>
    )
}

function SeasonsExplorer({ seasons }: { seasons: Season[] | undefined }) {
    return (
        <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-6 xl:gap-7 2xl:gap-8">
            <div className="flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-5 xl:gap-6 2xl:gap-7">
                <SeasonsListLink />
                <SeasonsResume seasons={seasons} />
            </div>
            <EpisodeCard />
        </div>
    )
}

export default ExplorerWrapper