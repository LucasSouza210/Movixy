
import { useTranslate } from "../../../../../../translations/Translations";
import type { Director } from "../../../../../../types/tmdb";
import DirectorAvatar from "./DirectorAvatar";

export default function DirectorSummary({ director }: { director: Director }) {

    const { line } = useTranslate()

    return (
        <div className="size-full flex flex-col justify-center items-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-2.5 xl:gap-3 2xl:gap-3.5">
            <DirectorAvatar path={director.profile_path} name={director.name} />
            <p className="max-w-26 text-center font-medium text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base tracking-wider leading-5.5 sm:leading-5.75 md:leading-7 lg:leading-4.5 xl:leading-5.25 2xl:leading-6 text-black dark:text-white">{director.name ?? line('notInformed')}</p>
        </div>
    )
}