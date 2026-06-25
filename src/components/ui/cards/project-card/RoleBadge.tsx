import type { Media, PersonCredit } from "../../../../types/tmdb";
import { FaMasksTheater, FaClapperboard, FaPencil, FaQuestion } from "react-icons/fa6";

export default function RoleBadge({ project }: { project: Media | PersonCredit }) {

    const isPersonCredit = (p: Media | PersonCredit): p is PersonCredit => 'job' in p || 'department' in p || 'character' in p

    const getIcon = (() => {
        if (!isPersonCredit(project)) return null

        if (project.character) return FaMasksTheater

        switch (true) {
            case project.job === "Director":
                return FaClapperboard
            case project.department === "Writing":
                return FaPencil
            default:
                return FaQuestion
        }
    })()

    const Icon = getIcon ?? FaQuestion

    return (
        <span className="size-6 sm:size-7 md:size-8 lg:size-6 xl:size-7 2xl:size-8 flex items-center justify-center border border-default rounded-full bg-zinc-50 dark:bg-zinc-900/50">
            {
                <Icon className="size-1/2 fill-zinc-500/70 dark:fill-zinc-300" />
            }
        </span>
    )
}