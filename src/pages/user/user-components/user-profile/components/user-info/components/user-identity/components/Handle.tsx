import Skeleton from "../../../../../../../../../components/ui/Skeleton"
import { useTranslate } from "../../../../../../../../../translations/Translations"

export default function Handle({ userName, loading }: { userName: string | undefined | null, loading: boolean }) {

    const { line } = useTranslate()

    if (loading) {
        return (
            <Skeleton className="w-fit h-4.5 sm:h-5.5 md:h-6 lg:h-5 xl:h-5.5 2xl:h-6 aspect-8/1 rounded-sm sm:rounded-[5px] md:rounded-md lg:rounded-sm xl:rounded-[5px] 2xl:rounded-md" />
        )
    }

    return (
        <p className="text-sm sm:text-[15px] md:text-base lg:text-sm xl:text-[15px] 2xl:text-base font-medium tracking-wider line-clamp-1 text-zinc-500 dark:text-zinc-400">
            {userName ? `@${userName}` : line('noUsername')}
        </p>
    )
}