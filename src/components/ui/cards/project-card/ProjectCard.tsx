import { useNavigate } from "react-router-dom";
import type { ActorCredit, Media } from "../../../../types/tmdb";
import ProjectPoster from "./ProjectPoster";
import ProjectRelease from "./ProjectRelease";
import ProjectRole from "./ProjectRole";

export default function ProjectCard({ project }: { project: Media | ActorCredit }) {

    const navigate = useNavigate()

    const isMovie = project.media_type == 'movie'

    return (
        <div className="w-full flex gap-3 border rounded-3xl shrink-0 p-4 cursor-pointer transition-all duration-300 ease-in-out bg-white hover:bg-white/50 dark:bg-zinc-950/50 dark:hover:bg-zinc-900/50 border-zinc-200 hover:border-zinc-300 dark:border-zinc-800/80 dark:hover:border-zinc-700/80" onClick={() => navigate(`/media/${project.media_type}/${project.id}`)}>
            <ProjectPoster path={project.poster_path} title={project.title} />
            <div className="flex-1 flex flex-col pt-3">
                <p className="text-xs font-medium tracking-wide leading-4.5 text-zinc-800 dark:text-zinc-200">
                    {isMovie ? project.title : project.name} <ProjectRelease date={`(${(isMovie ? project.release_date : project.first_air_date)?.split('-')[0]})`} />
                </p>
                {
                    "character" in project && project.character &&
                    <ProjectRole role={project.character} />
                }
            </div>
        </div>
    )
}