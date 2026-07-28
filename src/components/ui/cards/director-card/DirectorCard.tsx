import { useNavigate } from "react-router-dom";
import type { Director } from "../../../../types/tmdb";
import DirectorSummary from "./components/director-summary/DirectorSummary";
import CollectionPoster from "./components/collection-poster/CollectionPoster";

export default function DirectorCard({ director }: { director: Director }) {

    const navigate = useNavigate()

    return (
        <div className="w-full aspect-17/13 flex items-center justify-between sm:justify-center p-8 sm:p-9 md:p-10 lg:p-6 xl:p-7 2xl:p-8 pl-0 sm:pl-0 md:pl-0 lg:pl-0 xl:pl-0 2xl:pl-0 border border-default rounded-4xl sm:rounded-[39px] md:rounded-[46px] lg:rounded-4xl xl:rounded-[36px] 2xl:rounded-[40px] transition-all duration-300 ease-in-out cursor-pointer bg-white hover:bg-zinc-50/80 dark:bg-black/20 dark:hover:bg-zinc-900/30" onClick={() => navigate(`/person/${director.id}`)}>
            <DirectorSummary director={director} />
            <CollectionPoster list={director.movies} />
        </div>
    )
}