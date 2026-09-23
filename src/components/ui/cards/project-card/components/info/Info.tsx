import type { Media, PersonCredit } from "../../../../../../types/tmdb";
import Title from "./components/Title";
import ProjectRole from "./components/ProjectRole";
import Meta from "./components/meta/Meta";

export default function Info({ project }: { project: Media | PersonCredit }) {

    const isMovie = project.media_type == 'movie'

    return (
        <div className="flex-1 flex flex-col gap-0.5 sm:gap-0.75 md:gap-1 lg:gap-1.25 xl:gap-1.25 2xl:gap-1.25 relative pt-2 sm:pt-2.25 md:pt-2.5 lg:pt-2 xl:pt-2.5 2xl:pt-3">
            <Title title={isMovie ? project.title : project.name} />
            <ProjectRole project={project as PersonCredit} />
            <Meta project={project} isMovie={isMovie}/>
        </div>
    )
}