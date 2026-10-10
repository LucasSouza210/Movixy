import { useContext } from "react";
import type { Season } from "../../../../../../types/tmdb";
import EpisodeList from "./episode-list/EpisodeList";
import SeasonPicker from "./season-picker/SeasonPicker";
import { ExplorerContexts } from "../../../../../../contexts/SeasonExplorerProvider";
import SeasonOverview from "./season-overview/SeasonOverview";

export default function SeasonsResume({ seasons }: { seasons: Season[] | undefined }) {

    const explorer = useContext(ExplorerContexts)

    const { episodes } = explorer!

    return (
        <div className="flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-5 xl:gap-6 2xl:gap-7">
            <div className="flex flex-col gap-4 sm:gap-4.5 md:gap-5 lg:gap-3 xl:gap-3.5 2xl:gap-4">
                <SeasonPicker seasons={seasons} />
                <SeasonOverview />
            </div>
            <EpisodeList list={episodes} />
        </div>
    )
}