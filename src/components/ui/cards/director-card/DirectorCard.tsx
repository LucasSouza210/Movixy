import { useNavigate } from "react-router-dom";
import type { Director } from "../../../../types/tmdb";
import DirectorSummary from "./components/director-summary/DirectorSummary";
import Collection from "./components/collection/Collection";

export default function DirectorCard({ director }: { director: Director }) {

    const navigate = useNavigate()

    return (
        <div className="w-full flex flex-col items-center justify-center gap-5 sm:gap-6 md:gap-7 lg:gap-5 xl:gap-6 2xl:gap-7 p-8 sm:p-9 md:p-10 lg:p-6 xl:p-7 2xl:p-8 border rounded-3xl sm:rounded-[30px] md:rounded-[36px] lg:rounded-3xl xl:rounded-[30px] 2xl:rounded-[36px] action-default border-action" onClick={() => navigate(`/person/${director.id}`)}>
            <DirectorSummary director={director} />
            <Collection list={director.movies} />
        </div>
    )
}