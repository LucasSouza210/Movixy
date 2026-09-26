import type { PersonCredit } from "../../../../../../../../../types/tmdb"
import { getPersonRole } from "../../../../../../../../../utils/tmdb/getPersonRole"

export default function RoleBadge({ project }: { project: PersonCredit }) {

    const Icon = getPersonRole(project).icon

    return (
        <span className="size-6 sm:size-7.5 md:size-9 lg:size-5 xl:size-6 2xl:size-7 flex items-center justify-center border rounded-full bg-elevated border-default">
            {
                <Icon className="size-2/5 fill-zinc-500/70 dark:fill-zinc-300" />
            }
        </span>
    )
}