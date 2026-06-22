import { useTranslate } from "../../../../translations/Translations";
import { useNavigate } from "react-router-dom";
import type { ActorCredit, Media } from "../../../../types/tmdb";
import ProjectPoster from "./ProjectPoster";
import ProjectRelease from "./ProjectRelease";
import ProjectRole from "./ProjectRole";

export default function ProjectCard({ project }: { project: Media | ActorCredit }) {

    const { line } = useTranslate()

    const navigate = useNavigate()

    const isMovie = project.media_type == 'movie'

    return (
        <div className="size-full flex gap-3 sm:gap-4 md:gap-5 lg:gap-3 xl:gap-4 2xl:gap-5 border rounded-3xl sm:rounded-[28px] md:rounded-4xl lg:rounded-3xl xl:rounded-[28px] 2xl:rounded-4xl shrink-0 p-4 sm:p-5 md:p-6 lg:p-4 xl:p-5 2xl:p-6 cursor-pointer transition-all duration-300 ease-in-out bg-white hover:bg-white/50 dark:bg-zinc-950/50 dark:hover:bg-zinc-900/50 border-zinc-200 hover:border-zinc-300 dark:border-zinc-800/80 dark:hover:border-zinc-700/80" onClick={() => navigate(`/media/${project.media_type}/${project.id}`)}>
            <ProjectPoster path={project.poster_path} title={project.title} />
            <div className="flex-1 flex flex-col gap-0 sm:gap-0.5 md:gap-1 lg:gap-0 xl:gap-0.75 2xl:gap-1.5 relative pt-3 sm:pt-3.5 md:pt-4 lg:pt-3">
                <p className="text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wide sm:tracking-wider lg:tracking-wide xl:tracking-wider leading-4.5 line-clamp-1 text-zinc-800 dark:text-zinc-200">
                    {isMovie ? project.title : project.name}
                </p>
                {
                    "character" in project && project.character ?
                        <ProjectRole role={project.character} />
                        :
                        <p className="text-[10px] sm:text-xs md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wide md:tracking-wider lg:tracking-wide 2xl:tracking-wider leading-3.5 sm:leading-4.25 md:leading-5 lg:leading-3.5 xl:leading-4 2xl:leading-4.5 text-zinc-500 dark:text-zinc-400">{line('unknownRole')}</p>
                }
                <ProjectRelease date={isMovie ? project.release_date : project.first_air_date} />
            </div>
        </div>
    )
}