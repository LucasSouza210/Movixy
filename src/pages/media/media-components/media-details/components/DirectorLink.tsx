import { Link } from "react-router-dom";

export default function DirectorLink({ id, name }: { id: number, name: string }) {
    return (
        <Link className="font-semibold text-base sm:text-lg md:text-xl lg:text-xs xl:text-sm 2xl:text-base tracking-wider leading-5.5 sm:leading-6.25 md:leading-7 lg:leading-4.5 xl:leading-5 2xl:leading-5.5 shrink-0 transition-all duration-300 ease-in-out text-zinc-900 dark:text-white hover:text-orange-500" to={`/person/${id}`}>
            {name}
        </Link>
    )
}