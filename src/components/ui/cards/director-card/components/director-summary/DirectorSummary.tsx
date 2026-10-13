import type { Director } from "../../../../../../types/tmdb";
import DirectorAvatar from "./components/DirectorAvatar";
import Info from "./components/info/Info";
import Meta from "./components/meta/Meta";

export default function DirectorSummary({ director }: { director: Director }) {
    return (
        <div className="w-full flex-1 min-h-0 flex gap-4 sm:gap-5 md:gap-6 lg:gap-3.5 xl:gap-4.5 2xl:gap-5.5">
            <DirectorAvatar path={director.profile_path} name={director.name} />
            <div className="size-full flex flex-col justify-between">
                <Info director={director} />
                <Meta director={director}/>
            </div>
        </div>
    )
}