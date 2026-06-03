import { useTranslate } from "../../../../translations/Translations"
import type { ActorCredit } from "../../../../types/tmdb"
import ProjectsList from "./ProjectsList"

export default function ActorProjects({ projects }: { projects: ActorCredit[] }) {

    const { line } = useTranslate()

    return (
        <div className="w-full flex flex-col gap-6 border rounded-4xl p-6 bg-white dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800/80">
            <div className="w-full-full flex items-center">
                <p className="text-base font-semibold tracking-wider leading-none text-black dark:text-white">{line('actorProjects')}</p>
            </div>
            <ProjectsList projects={projects}/>
        </div>
    )
}