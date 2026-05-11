import type { Actor } from "../../pages/home/home-components/popular-actors/PopularActors";

export default function ActorCard({ actor }: { actor: Actor }) {
    return (
        <div className="shrink-0 flex flex-col items-center gap-4">
            <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} loading="lazy" decoding="async" draggable={false} className="w-full aspect-square object-cover rounded-full" />
            <p className="w-fit text-center font-medium text-base tracking-wider leading-6 text-zinc-800 dark:text-zinc-200">{actor.name}</p>
        </div>
    )
}