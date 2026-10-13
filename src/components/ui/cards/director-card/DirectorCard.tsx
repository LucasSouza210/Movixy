import { useNavigate } from "react-router-dom";
import type { Director } from "../../../../types/tmdb";
import DirectorSummary from "./components/director-summary/DirectorSummary";
import Collection from "./components/collection/Collection";

export default function DirectorCard({ director }: { director: Director }) {

    const navigate = useNavigate()

    return (
        <div className="w-full aspect-9/8 lg:aspect-6/5 flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-3.5 xl:gap-4.5 2xl:gap-5.5 p-6 sm:p-7 md:p-8 lg:p-5 xl:p-6 2xl:p-7 border rounded-3xl sm:rounded-[30px] md:rounded-[36px] lg:rounded-3xl xl:rounded-[30px] 2xl:rounded-[36px] action-default border-action" onClick={() => navigate(`/person/${director.id}`)}>
            <DirectorSummary director={director} />
            <Collection list={director.movies} />
        </div>
    )
}