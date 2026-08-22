import type { PersonCredit } from "../../../../../types/tmdb";
import { getPersonRole } from "../../../../../utils/tmdb/getPersonRole";

export default function RoleBadge({ project }: { project: PersonCredit }) {

    const Icon = getPersonRole(project).icon

    return (
        <span className="size-6 sm:size-7 md:size-8 lg:size-6 xl:size-7 2xl:size-8 flex items-center justify-center border rounded-full bg-default border-default">
            {
                <Icon className="size-2/5 fill-zinc-500/70 dark:fill-zinc-300" />
            }
        </span>
    )
}