import { useTranslate } from "../../../../../../../translations/Translations"

export default function UserIdentity({ name, userName }: { name: string | undefined | null, userName: string | undefined | null }) {

    const { line } = useTranslate()

    return (
        <div className="h-fit flex flex-col gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5">
            <p className="text-xl sm:text-[22px] md:text-2xl lg:text-xl xl:text-[22px] 2xl:text-2xl font-medium tracking-wider line-clamp-1 text-black dark:text-white">
                {name ?? line('noProfileName')}
            </p>
            <p className="text-sm sm:text-[15px] md:text-base lg:text-sm xl:text-[15px] 2xl:text-base font-medium tracking-wider line-clamp-1 text-zinc-500 dark:text-zinc-400">
                {userName ? userName : line('noUserName')}
            </p>
        </div>
    )
}