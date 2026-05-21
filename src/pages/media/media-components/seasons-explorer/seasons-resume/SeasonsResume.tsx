import { useContext } from "react";
import type { Season } from "../../../../../types/tmdb";
import EpisodeList from "./episode-list/EpisodeList";
import SeasonPicker from "./season-picker/SeasonPicker";
import { ExplorerContexts } from "../../../../../contexts/SeasonExplorerProvider";
import SeasonOverview from "./SeasonOverview";

export default function SeasonsResume({ seasons }: { seasons: Season[] | undefined }) {

    const explorer = useContext(ExplorerContexts)

    const { episodes } = explorer!

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2.5">
                <SeasonPicker seasons={seasons} />
                <SeasonOverview />
            </div>

            <EpisodeList list={episodes} />
        </div>
    )
}