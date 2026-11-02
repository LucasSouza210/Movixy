import Skeleton from "../../../../../../../components/ui/Skeleton"
import { useTranslate } from "../../../../../../../translations/Translations"

export default function Name({ name, mobile, loading }: { name: string | undefined, mobile?: boolean, loading: boolean }) {

    const { line } = useTranslate()

    return (
        loading ? <Skeleton className={`w-fit h-6 sm:h-6.75 md:h-7.5 lg:h-6 xl:h-7 2xl:h-8 aspect-6/1 mb-1.5 sm:mb-1.75 md:mb-2 lg:mb-1.5 xl:mb-1.75 2xl:mb-2 rounded-[5px] sm:rounded-md md:rounded-[7px] lg:rounded-[5px] xl:rounded-md 2xl:rounded-[7px] ${mobile ? 'block lg:hidden' : 'hidden lg:block'}`} />
            :
            <p className={`max-w-full text-wrap text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-semibold tracking-wider leading-6 sm:leading-6.75 md:leading-7.5 lg:leading-6 xl:leading-7 2xl:leading-8 break-all text-title ${mobile ? 'block lg:hidden' : 'hidden lg:block'}`}>
                {
                    name?.trim() || line('notInformed')
                }
            </p>
    )
}