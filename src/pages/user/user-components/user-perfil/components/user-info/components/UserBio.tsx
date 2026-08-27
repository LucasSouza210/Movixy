import { useTranslate } from "../../../../../../../translations/Translations"
import Skeleton from "../../../../../../../components/ui/Skeleton"

export default function UserBio({ bio, loading }: { bio: string | undefined | null, loading: boolean }) {

    const { line } = useTranslate()

    if (loading) {
        return (
            <Skeleton className="h-5 sm:h-5.5 md:h-6 lg:h-5 xl:h-5.5 2xl:h-6 rounded-sm sm:rounded-[5px] md:rounded-md lg:rounded-sm xl:rounded-[5px] 2xl:rounded-md" containerClassName="w-full lg:max-w-3/5 gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2" lines={2}/>
        )
    }

    return (
        <p className="text-sm sm:text-[15px] md:text-base lg:text-sm xl:text-[15px] 2xl:text-base font-medium tracking-wider leading-6.5 sm:leading-7 md:leading-7.5 lg:leading-6.5 xl:leading-7 2xl:leading-7.5 text-zinc-600 dark:text-zinc-300">
            {bio ?? line('noUserBio')}
        </p>
    )
}