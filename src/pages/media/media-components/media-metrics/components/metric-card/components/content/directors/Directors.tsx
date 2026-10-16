import DirectorLink from "./components/DirectorLink";
import type { Director } from "../../../MetricCard";
import OtherDirectors from "./components/OtherDirectors";

export default function Directors({ directors }: { directors: Director[] | undefined }) {

    const mainDirector = directors ? directors[0] : undefined

    return (
        <div className="flex">
            <DirectorLink id={mainDirector?.id} name={mainDirector?.name} />
            {
                (directors && directors?.length > 1) &&
                <OtherDirectors directors={directors} />
            }
        </div>
    )
}