import Skeleton from "../../../../../../../components/ui/Skeleton"
import { useTranslate } from "../../../../../../../translations/Translations"

export default function Handle({ userName, loading }: { userName: string | undefined | null, loading: boolean }) {

    const { line } = useTranslate()

    return (
        loading ? <Skeleton className="w-fit h-4.5 sm:h-5.5 md:h-6 lg:h-5 xl:h-5.5 2xl:h-6 aspect-8/1 rounded-sm sm:rounded-[4.5px] md:rounded-[5px] lg:rounded-sm xl:rounded-[4.5px] 2xl:rounded-[5px]" />
            :
            <p className="text-sm sm:text-[15px] md:text-base lg:text-sm xl:text-[15px] 2xl:text-base font-medium tracking-wider line-clamp-1 text-default">
                {userName ? `@${userName}` : line('noUsername')}
            </p>
    )
}