import { useNavigate } from "react-router-dom";
import type { PersonCredit, Media } from "../../../../types/tmdb";
import ProjectPoster from "./ProjectPoster";
import ProjectRelease from "./ProjectRelease";
import ProjectRole from "./ProjectRole";
import RoleBadge from "./RoleBadge";

export default function ProjectCard({ project }: { project: Media | PersonCredit }) {

    const navigate = useNavigate()

    const isMovie = project.media_type == 'movie'

    return (
        <div className="size-full flex gap-3 sm:gap-4 md:gap-5 lg:gap-3 xl:gap-4 2xl:gap-5 border rounded-3xl sm:rounded-[28px] md:rounded-4xl lg:rounded-3xl xl:rounded-[28px] 2xl:rounded-4xl shrink-0 p-4 sm:p-5 md:p-6 lg:p-4 xl:p-5 2xl:p-6 cursor-pointer transition-all duration-300 ease-in-out bg-white hover:bg-white/50 dark:bg-zinc-950/50 dark:hover:bg-zinc-900/50 border-zinc-200 hover:border-zinc-300 dark:border-zinc-800/80 dark:hover:border-zinc-700/80" onClick={() => navigate(`/media/${project.media_type}/${project.id}`)}>
            <ProjectPoster path={project.poster_path} title={project.title} />
            <div className="flex-1 flex flex-col gap-0 sm:gap-0.5 md:gap-1 lg:gap-0 xl:gap-0.75 2xl:gap-1.5 relative pt-3 sm:pt-3.5 md:pt-4 lg:pt-3">
                <p className="text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wide sm:tracking-wider lg:tracking-wide xl:tracking-wider leading-4.5 line-clamp-1 text-zinc-800 dark:text-zinc-200">
                    {isMovie ? project.title : project.name}
                </p>
                <ProjectRole project={project as PersonCredit} />
                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2.5 2xl:gap-3 absolute bottom-0 right-0">
                    <ProjectRelease date={isMovie ? project.release_date : project.first_air_date} />
                    <RoleBadge project={project as PersonCredit} />
                </div>
            </div>
        </div>
    )
}