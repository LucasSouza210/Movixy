import DirectorLink from "./DirectorLink";
import type { Director } from "../../../MetricCard";

export default function Directors({ directors }: { directors: Director[] | undefined }) {
    return (
        <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2">
            {
                directors?.slice(0, 2).map((i, index) => (
                    <DirectorLink id={i.id} name={i.name} key={index} />
                ))
            }
        </div>
    )
}