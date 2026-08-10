import { useTranslate } from "../../../../../../../translations/Translations"

export default function UserBio({ bio }: { bio: string | undefined | null }) {

    const { line } = useTranslate()

    return (
        <p className="text-sm sm:text-[15px] md:text-base lg:text-sm xl:text-[15px] 2xl:text-base font-medium tracking-wider leading-6.5 sm:leading-7 md:leading-7.5 lg:leading-6.5 xl:leading-7 2xl:leading-7.5 text-zinc-600 dark:text-zinc-300">
            {bio ?? line('noUserBio')}
        </p>
    )
}