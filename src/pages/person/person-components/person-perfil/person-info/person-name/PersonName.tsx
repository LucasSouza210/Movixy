import { useTranslate } from "../../../../../../translations/Translations"
import PersonNameSkeleton from "./PersonNameSkeleton"

export default function PersonName({ name, loading }: { name: string | undefined, loading: boolean }) {

    const { line } = useTranslate()

    return (
        loading ? <PersonNameSkeleton />
            :
            <p className="max-w-full text-wrap text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-semibold tracking-wider leading-6 sm:leading-6.75 md:leading-7.5 lg:leading-6 xl:leading-7 2xl:leading-8 break-all text-black dark:text-white">{name?.trim() || line('notInformed')}</p>
    )
}