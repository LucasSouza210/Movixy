import { useTranslate } from "../../../../../../../translations/Translations"
import type { PersonCredit } from "../../../../../../../types/tmdb"
import { getPersonRole } from "../../../../../../../utils/tmdb/getPersonRole"

export default function ProjectRole({ project }: { project: PersonCredit }) {

    const { line } = useTranslate()

    const role = line(getPersonRole(project).key !== 'unknown' ? getPersonRole(project).key : 'unknownRole')

    return (
        <p className="text-[10px] sm:text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wider line-clamp-1 text-zinc-500 dark:text-zinc-400">
            {role}
        </p>
    )
}