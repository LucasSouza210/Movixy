import type { WatchProvider } from "../../../../../../types/tmdb";

export default function PosterService({ service }: { service: WatchProvider }) {

    const logo = `https://image.tmdb.org/t/p/w92${service.logo_path}`

    return (
        <a className="size-9 md:size-11 flex rounded-full overflow-hidden border-2 border-zinc-400/40" href="">
            <img className="size-full object-cover" src={logo} alt="" />
        </a>
    )
}