import { useContext, useMemo } from "react";
import { MediaListContexts } from "../../../../../../contexts/MediaListProvider";
import type { PersonCredit } from "../../../../../../types/tmdb";
import ProjectCard from "../../../../../../components/ui/cards/project-card/ProjectCard";
import NoProjects from "../no-projects/NoProjects";
import ListSkeleton from "./ListSkeleton";
import LimitedRowsScroll from "../../../../../../components/ui/scrolls/LimitedRowsScroll";

const columnsPerView = [1, 1, 1, 2]
const rowsPerView = [3, 3, 3, 3]
const gapPerBreakpoint = [4, 5, 6, 3, 4, 5]

export default function List({ projects, loading }: { projects: PersonCredit[], loading: boolean }) {

    const { filteredList, sortBy } = useContext(MediaListContexts)!

    const list = (filteredList ?? projects) as PersonCredit[]

    const getReleaseDate = (project: PersonCredit) => project.media_type === "movie" ? project.release_date : project.first_air_date

    const sortedProjects = useMemo(() => {
        return [...list].sort((a, b) => {
            switch (sortBy) {
                case "oldest": {
                    const dateA = getReleaseDate(a) ? new Date(getReleaseDate(a)!).getTime() : Infinity
                    const dateB = getReleaseDate(b) ? new Date(getReleaseDate(b)!).getTime() : Infinity
                    return dateA - dateB;
                }
                case "highest_rated":
                    return (b.vote_average ?? 0) - (a.vote_average ?? 0)
                case "lowest_rated":
                    return (a.vote_average ?? 0) - (b.vote_average ?? 0)
                default: {
                    const dateA = getReleaseDate(a) ? new Date(getReleaseDate(a)!).getTime() : -Infinity
                    const dateB = getReleaseDate(b) ? new Date(getReleaseDate(b)!).getTime() : -Infinity
                    return dateB - dateA;
                }
            }
        })
    }, [list, sortBy])

    return (
        <div className="w-full p-6 sm:p-7 md:p-8 lg:p-4 xl:p-5 2xl:p-6 bg-secondary">
            {
                loading ? <ListSkeleton />
                    :
                    sortedProjects.length > 0 ?
                        <LimitedRowsScroll className="w-full" columnsPerView={columnsPerView} rowsPerView={rowsPerView} gapPerBreakpoint={gapPerBreakpoint}>
                            {
                                sortedProjects.map((i, index) => (
                                    <ProjectCard project={i} key={index} />
                                ))
                            }
                        </LimitedRowsScroll>
                        :
                        <NoProjects />
            }
        </div>
    )
}