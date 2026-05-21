import type { Media, Season } from "../../../../types/tmdb";
import SeasonsListLink from "./SeasonsListLink";
import SeasonsResume from "./seasons-resume/SeasonsResume";
import SeasonExplorerProvider from "../../../../contexts/SeasonExplorerProvider";

function ExplorerWrapper({ media, seasons }: { media: Media, seasons: Season[] | undefined }) {
    return (
        <SeasonExplorerProvider media={media}>
            <SeasonsExplorer seasons={seasons} />
        </SeasonExplorerProvider>
    )
}

function SeasonsExplorer({ seasons }: { seasons: Season[] | undefined }) {


    return (
        <div className="flex flex-col gap-3">
            <SeasonsListLink />
            <SeasonsResume seasons={seasons} />
        </div>
    )
}

export default ExplorerWrapper