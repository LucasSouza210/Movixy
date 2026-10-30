import type { Media, PersonCredit } from "../../../../../../../../types/tmdb";
import Release from "./components/Release";
import RoleBadge from "./components/RoleBadge";

export default function Meta({ project, isMovie }: { project: Media | PersonCredit, isMovie: boolean }) {
    return (
        <div className="flex items-center gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-2 xl:gap-2.5 2xl:gap-3 absolute bottom-0 right-0">
            <Release date={isMovie ? project.release_date : project.first_air_date} />
            <RoleBadge project={project as PersonCredit} />
        </div>
    )
}