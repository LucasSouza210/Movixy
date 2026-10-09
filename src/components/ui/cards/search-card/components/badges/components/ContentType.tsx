import { LuFilm, LuTv, LuUser, LuCircleDashed } from "react-icons/lu";

export default function ContentType({ type }: { type: string | undefined }) {

    const getIcon = () => {
        switch (type) {
            case "movie":
                return LuFilm;
            case "tv":
                return LuTv;
            case "person":
                return LuUser;
            default:
                return LuCircleDashed;
        }
    }

    const Icon = getIcon()

    return (
        <span className="size-6 sm:size-7 md:size-8 lg:size-6 xl:size-7 2xl:size-8 flex items-center justify-center border border-default rounded-full card-badge">
            <Icon className="size-2/5 text-default" />
        </span>
    )
}