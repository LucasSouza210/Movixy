import { useTranslate } from "../../../../translations/Translations";
import { RxExit } from "react-icons/rx";

export default function MenuLogOut() {

    const { line } = useTranslate()

    return (
        <button className="w-full h-12 flex items-center justify-start gap-3 px-4">
            <RxExit className="size-5 text-red-600 dark:text-red-500"/>
            <p className="text-lg font-medium tracking-wider leading-none text-red-600 dark:text-red-500">{line('signOut')}</p>
        </button>
    )
}