import type { Director } from "../../../../../../pages/media/media-components/media-metrics/components/metric-card/MetricCard";
import Info from "./components/Info";
import DirectorsList from "./components/directors-list/DirectorsList";

export default function DirectorsModal({ directors }: { directors: Director[] }) {

    const ids = directors.map((i) => i.id)

    return (
        <div className="w-full sm:w-88 md:w-106 lg:w-74 xl:w-89 2xl:w-104 flex flex-col gap-4 sm:gap-4.5 md:gap-5 lg:gap-4 xl:gap-4.5 2xl:gap-5 p-6 sm:p-7 md:p-8 lg:p-6 xl:p-7 2xl:p-8 rounded-[26px] sm:rounded-[29px] md:rounded-4xl lg:rounded-3xl xl:rounded-[26px] 2xl:rounded-[28px] border bg-default border-default">
            <Info />
            <DirectorsList directorsIds={ids} />
        </div>
    )
}