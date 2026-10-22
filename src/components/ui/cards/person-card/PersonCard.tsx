import { useNavigate } from "react-router-dom";
import type { PersonCardData } from "../../../../types/tmdb";
import CardInfo from "./components/card-info/CardInfo";
import PersonCardAvatar from "./components/PersonCardAvatar";
import LikeButton from "./components/LikeButton";

export default function PersonCard({ person }: { person: PersonCardData }) {

    const navigate = useNavigate()

    return (
        <div className="shrink-0 flex flex-col items-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-2.5 xl:gap-3 2xl:gap-3.5 group cursor-pointer" onClick={() => navigate(`/person/${person.id}`)}>
            <div className="w-full aspect-square rounded-full relative">
                <PersonCardAvatar path={person.profile_path} name={person.name} />
                {
                    person.id &&
                    <LikeButton personId={person.id} />
                }
            </div>
            <CardInfo person={person} role={person.character} />
        </div>
    )
}