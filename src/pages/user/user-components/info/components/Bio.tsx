import Skeleton from "../../../../../components/ui/Skeleton"
import { useTranslate } from "../../../../../translations/Translations"

export default function Bio({ bio, loading }: { bio: string | undefined | null, loading: boolean }) {

    const { line } = useTranslate()

    return (
        loading ? <Skeleton className="h-5 sm:h-5.5 md:h-6 lg:h-5 xl:h-5.5 2xl:h-6 rounded-sm sm:rounded-[4.5px] md:rounded-[5px] lg:rounded-sm xl:rounded-[4.5px] 2xl:rounded-[5px]" containerClassName="gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2" lines={2} />
            :
            <p className="w-full text-sm sm:text-[15px] md:text-base lg:text-sm xl:text-[15px] 2xl:text-base font-medium tracking-wider leading-6.5 sm:leading-7 md:leading-7.5 lg:leading-6.5 xl:leading-7 2xl:leading-7.5 text-default">
                {bio ?? line('noUserBio')}
            </p>
    )
}