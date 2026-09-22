import { useAuth } from "../../../../../../../../../hooks/useAuth"
import { useTranslate } from "../../../../../../../../../translations/Translations"

export default function Name({ name }: { name: string | undefined }) {

    const { session } = useAuth()

    const { line } = useTranslate()

    return (
        <p className="text-base sm:text-lg md:text-xl font-medium tracking-wider leading-none line-clamp-1 text-zinc-700 dark:text-zinc-200">
            {
                session ? (name ?? line('noProfileName')) : line('guestLabel')
            }
        </p>
    )
}