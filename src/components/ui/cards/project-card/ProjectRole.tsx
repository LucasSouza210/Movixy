import { useTranslate } from "../../../../translations/Translations"
import type { PersonCredit } from "../../../../types/tmdb"
import { getPersonRole } from "../../../../utils/tmdb/getPersonRole"

export default function ProjectRole({ project }: { project: PersonCredit }) {

    const { line } = useTranslate()

    const role = line(getPersonRole(project).key !== 'unknown' ? getPersonRole(project).key : 'unknownRole')

    return (
        <p className="text-[10px] sm:text-xs md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wide md:tracking-wider lg:tracking-wide 2xl:tracking-wider leading-3.5 sm:leading-4.25 md:leading-5 lg:leading-3.5 xl:leading-4 2xl:leading-4.5 line-clamp-2 text-zinc-500 dark:text-zinc-400">
            {role}
        </p>
    )
}