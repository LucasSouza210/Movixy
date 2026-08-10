import { useTranslate } from "../../../../../../../translations/Translations"

export default function UserListsTitle() {

    const { line } = useTranslate()

    return (
        <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-base xl:text-lg 2xl:text-xl tracking-wider leading-none text-zinc-800 dark:text-zinc-200">
            {line('userListsTitle')}
        </p>
    )
}