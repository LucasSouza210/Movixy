import type { Media, PersonCredit } from "../../../../../../types/tmdb";
import Title from "./components/Title";
import Role from "./components/Role";
import Meta from "./components/meta/Meta";

export default function Info({ project }: { project: Media | PersonCredit }) {

    const isMovie = project.media_type == 'movie'

    return (
        <div className="flex-1 flex flex-col gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 relative pt-2 sm:pt-2.25 md:pt-2.5 lg:pt-1.5 xl:pt-2 2xl:pt-2.5">
            <Title title={isMovie ? project.title : project.name} />
            <Role project={project as PersonCredit} />
            <Meta project={project} isMovie={isMovie}/>
        </div>
    )
}