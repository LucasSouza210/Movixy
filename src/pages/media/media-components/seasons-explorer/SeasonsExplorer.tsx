import type { Media, Season } from "../../../../types/tmdb";
import SeasonExplorerProvider from "../../../../contexts/SeasonExplorerProvider";
import SeasonsExplorerSkeleton from "./SeasonsExplorerSkeleton";
import Title from "../../../../components/ui/content-row/components/Title";
import SeasonsResume from "./components/seasons-resume/SeasonsResume";
import EpisodeCard from "./components/episode-card/EpisodeCard";

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
                <Title title={'showEpisodes'} />
                <SeasonsResume seasons={seasons} />
            </div>
            <EpisodeCard />
        </div>
    )
}

export default ExplorerWrapper