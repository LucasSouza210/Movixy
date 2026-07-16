import { LuFilm, LuTv, LuUser, LuCircleHelp } from "react-icons/lu";

export default function SearchCardBadge({ type }: { type: string | undefined }) {

    const getIcon = () => {
        switch (type) {
            case "movie":
                return LuFilm;
            case "tv":
                return LuTv;
            case "person":
                return LuUser;
            default:
                return LuCircleHelp;
        }
    }

    const Icon = getIcon()

    return (
        <span className="size-6 flex items-center justify-center absolute bottom-0 right-0 border border-default rounded-full bg-zinc-50 dark:bg-zinc-950/25">
            <Icon className="size-1/2 text-zinc-500 dark:text-zinc-200" />
        </span>
    )
}