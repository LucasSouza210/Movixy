import { useTranslate } from "../../../../../../translations/Translations"
import BioSkeleton from "./BioSkeleton"

export default function Bio({ bio, loading }: { bio: string | undefined | null, loading: boolean }) {

    const { line } = useTranslate()

    return (
        loading ? <BioSkeleton/> :
        <p className="w-full text-sm sm:text-[15px] md:text-base lg:text-sm xl:text-[15px] 2xl:text-base font-medium tracking-wider leading-6.5 sm:leading-7 md:leading-7.5 lg:leading-6.5 xl:leading-7 2xl:leading-7.5 text-default">
            {bio ?? line('noUserBio')}
        </p>
    )
}