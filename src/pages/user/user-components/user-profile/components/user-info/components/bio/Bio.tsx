import { useTranslate } from "../../../../../../../../translations/Translations"
import BioSkeleton from "./BioSkeleton"

export default function Bio({ bio, loading }: { bio: string | undefined | null, loading: boolean }) {

    const { line } = useTranslate()

    return (
        loading ? <BioSkeleton/> :
        <p className="w-full text-sm sm:text-[15px] md:text-base lg:text-base xl:text-[17px] 2xl:text-lg font-medium tracking-wider leading-6.5 sm:leading-7 md:leading-7.5 lg:leading-7 xl:leading-7.5 2xl:leading-8 text-zinc-600 dark:text-zinc-300">
            {bio ?? line('noUserBio')}
        </p>
    )
}