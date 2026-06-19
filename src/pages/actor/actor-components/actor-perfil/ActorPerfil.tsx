import type { ActorDetails } from "../../../../types/tmdb";
import ActorInfo from "./ActorInfo";

export default function ActorPerfil({ actor }: { actor: ActorDetails }) {
    return (
        <div className="w-full lg:w-2/5 flex lg:flex-col gap-6 sm:gap-6.5 md:gap-7">
            <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} loading="lazy" decoding="async" draggable={false} className="w-2/5 lg:w-full h-auto md:max-h-none object-cover border rounded-3xl sm:rounded-[27px] md:rounded-[30px] border-zinc-300 dark:border-zinc-800" />
            <div className="lg:hidden">
                <ActorInfo actor={actor} />
            </div>
        </div>
    )
}