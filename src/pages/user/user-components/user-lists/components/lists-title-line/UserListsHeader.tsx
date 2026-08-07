import { useTranslate } from "../../../../../../translations/Translations";
import TitleLineActions from "./components/title-line-actions/TitleLineActios";

export default function UserListsHeader() {

    const { line } = useTranslate()

    return (
        <div className="w-full flex items-center justify-between">
            <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-base xl:text-lg 2xl:text-xl tracking-wider leading-none text-zinc-800 dark:text-zinc-200">
                {line('userListsTitle')}
            </p>
            <TitleLineActions />
        </div>
    )
}