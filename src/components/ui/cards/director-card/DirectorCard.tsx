import { useContext } from "react";
import { Contexts } from "../../../../contexts/ContextsProvider";
import { useNavigate } from "react-router-dom";
import type { Director } from "../../../../types/tmdb";
import DirectorSummary from "./components/director-summary/DirectorSummary";
import Collection from "./components/collection/Collection";

export default function DirectorCard({ director, compact }: { director: Director, compact?: boolean }) {

    const { setOverlay } = useContext(Contexts)!

    const navigate = useNavigate()

    const handleClick = () => {

        compact && setOverlay(null)

        navigate(`/person/${director.id}`)

    }

    return (
        <div className={`w-full flex flex-col items-center justify-center border border-action ${compact ? 'aspect-video p-4 sm:p-4.5 md:p-5 lg:p-4 xl:p-4.5 2xl:p-5 rounded-[20px] sm:rounded-[22px] md:rounded-3xl lg:rounded-[18px] xl:rounded-[20px] 2xl:rounded-[22px] action-elevated' : 'aspect-9/8 lg:aspect-6/5 gap-4 sm:gap-4.5 md:gap-5 lg:gap-3 xl:gap-3.75 2xl:gap-4.5 p-6 sm:p-7 md:p-8 lg:p-5 xl:p-6 2xl:p-7 rounded-3xl sm:rounded-[30px] md:rounded-[36px] lg:rounded-3xl xl:rounded-[30px] 2xl:rounded-[36px] action-default'}`} onClick={() => handleClick()}>
            <DirectorSummary director={director} compact={compact} />
            {
                !compact &&
                <Collection list={director.movies} />
            }
        </div>
    )
}