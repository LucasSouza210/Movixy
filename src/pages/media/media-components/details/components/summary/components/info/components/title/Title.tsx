import { useTranslate } from "../../../../../../../../../../translations/Translations"
import TitleSkeleton from "./TitleSkeleton"
import Release from "./components/Release"

export default function Title({ title, releaseYear, loading }: { title: string | undefined, releaseYear: string | undefined, loading: boolean }) {

    const { line } = useTranslate()

    return (
        loading ? <TitleSkeleton />
            :
            <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl tracking-wider leading-5.5 sm:leading-6.25 md:leading-7 lg:leading-7 xl:leading-8 2xl:leading-9 line-clamp-2 text-white lg:text-black lg:dark:text-white">
                {title ?? line('unavailableTitle')} {
                    releaseYear &&
                    <Release release={releaseYear} />
                }
            </p>
    )
}