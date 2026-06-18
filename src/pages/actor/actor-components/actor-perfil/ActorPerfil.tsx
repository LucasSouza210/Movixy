import type { ActorDetails } from "../../../../types/tmdb";
import ActorInfo from "./ActorInfo";

export default function ActorPerfil({ actor }: { actor: ActorDetails }) {
    return (
        <div className="w-full flex gap-6 md:gap-7">
            <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} loading="lazy" decoding="async" draggable={false} className="w-2/5 h-auto md:max-h-none object-cover border rounded-3xl sm:rounded-[27px] md:rounded-[30px] border-zinc-300 dark:border-zinc-800" />
            <ActorInfo actor={actor} />
        </div>
    )
}