import { useTranslate } from "../../../../../../../translations/Translations"

export default function UserBio({ bio }: { bio: string | undefined | null }) {

    const { line } = useTranslate()

    return (
        <p className="text-sm sm:text-[15px] md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider leading-6.5 sm:leading-7 md:leading-7.5 lg:leading-5.5 xl:leading-6 2xl:leading-6.5 text-zinc-600 dark:text-zinc-300">
            {bio ?? line('noUserBio')}
        </p>
    )
}