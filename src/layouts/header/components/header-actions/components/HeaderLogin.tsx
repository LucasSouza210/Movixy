import { Link } from "react-router-dom";
import { useTranslate } from "../../../../../translations/Translations";

export default function HeaderLogin() {

    const { line } = useTranslate()

    return (
        <Link to={'/auth'} className="lg:h-7 xl:h-8 2xl:h-9 shrink-0 hidden lg:flex items-center lg:gap-1.5 xl:gap-1.75 2xl:gap-2 lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg font-medium lg:text-[10px] xl:text-[11px] 2xl:text-xs tracking-wider leading-none lg:px-4 xl:px-3.5 2xl:px-5 action-brand text-action-alternative">
            {
                line('signInLink')
            }
        </Link>
    )
}