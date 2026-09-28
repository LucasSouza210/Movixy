import { Link } from "react-router-dom";
import type { PersonCredit, Media } from "../../../../types/tmdb";
import ProjectPoster from "./components/ProjectPoster";
import Info from "./components/info/Info";

export default function ProjectCard({ project }: { project: Media | PersonCredit }) {
    return (
        <Link to={`/media/${project.media_type}/${project.id}`} className="w-full aspect-16/9 flex gap-3 sm:gap-3.5 md:gap-4 lg:gap-2 xl:gap-2.5 2xl:gap-3 p-4 sm:p-4.5 md:p-5 lg:p-3 xl:p-3.5 2xl:p-4 border rounded-[20px] sm:rounded-[23px] md:rounded-[26px] lg:rounded-2xl xl:rounded-[18px] 2xl:rounded-[20px] action-default border-action">
            <ProjectPoster path={project.poster_path} title={project.title} />
            <Info project={project} />
        </Link>
    )
}