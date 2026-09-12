
import { useTranslate } from "../../../../../../translations/Translations";
import type { Director } from "../../../../../../types/tmdb";
import DirectorAvatar from "./DirectorAvatar";

export default function DirectorSummary({ director }: { director: Director }) {

    const { line } = useTranslate()

    return (
        <div className="size-full flex items-center gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6">
            <DirectorAvatar path={director.profile_path} name={director.name} />
            <p className="text-center font-medium text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base tracking-wider leading-5.5 sm:leading-5.75 md:leading-7 lg:leading-4.5 xl:leading-5.25 2xl:leading-6 line-clamp-2 text-black dark:text-white">
                {director.name ?? line('notInformed')}
            </p>
        </div>
    )
}