import { Link } from "react-router-dom";
import type { PersonCredit, Media } from "../../../../types/tmdb";
import ProjectPoster from "./components/ProjectPoster";
import Info from "./components/info/Info";

export default function ProjectCard({ project }: { project: Media | PersonCredit }) {
    return (
        <Link to={`/media/${project.media_type}/${project.id}`} className="size-full flex gap-3 sm:gap-3.5 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-5 p-4 sm:p-4.5 md:p-5 lg:p-4 xl:p-5 2xl:p-6 border rounded-[20px] sm:rounded-[23px] md:rounded-[26px] lg:rounded-[22px] xl:rounded-[26px] 2xl:rounded-[30PX] shrink-0 action-default border-action">
            <ProjectPoster path={project.poster_path} title={project.title} />
            <Info project={project} />
        </Link>
    )
}