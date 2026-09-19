import { Link } from "react-router-dom";

export default function DirectorLink({ id, name }: { id: number, name: string }) {
    return (
        <Link className="font-semibold text-base sm:text-lg md:text-xl lg:text-xs xl:text-sm 2xl:text-base tracking-wider truncate shrink-0 transition-all duration-300 ease-in-out text-title hover:text-orange-500" to={`/person/${id}`}>
            {name}
        </Link>
    )
}