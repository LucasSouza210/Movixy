import Skeleton from "../../../../../../../../../components/ui/Skeleton"
import { useTranslate } from "../../../../../../../../../translations/Translations"

export default function Name({ name, loading }: { name: string | undefined | null, loading: boolean }) {

    const { line } = useTranslate()

    if (loading) {
        return (
            <Skeleton className="w-fit h-6 sm:h-6.5 md:h-7 lg:h-6 xl:h-6.5 2xl:h-7 aspect-5/1 rounded-[5px] sm:rounded-md md:rounded-[7px] lg:rounded-[5px] xl:rounded-md 2xl:rounded-[7px]" />
        )
    }

    return (
        <p className="text-xl sm:text-[22px] md:text-2xl lg:text-xl xl:text-[22px] 2xl:text-2xl font-medium tracking-wider line-clamp-1 text-black dark:text-white">
            {name ?? line('noProfileName')} <br />
        </p>
    )
}