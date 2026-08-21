import { useTranslate } from "../../../../../../../translations/Translations";
import { useAuth } from "../../../../../../../hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";

export default function MenuPerfilInfo() {

    const { line } = useTranslate()

    const { session } = useAuth()


    return (
        <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
            <FaUserCircle className="size-12 sm:size-13 md:size-14 fill-zinc-400" />
            <p className="text-base sm:text-lg md:text-xl font-medium tracking-wider leading-none line-clamp-1 text-zinc-700 dark:text-zinc-200">
                {
                    !session ? line('guestLabel') : 'John Doe'
                }
            </p>
        </div>
    )
}