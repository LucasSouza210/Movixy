import { Link } from "react-router-dom";
import { useTranslate } from "../../../../../../../../../../translations/Translations";

export default function DirectorLink({ id, name }: { id: number | undefined, name: string | undefined }) {

    const { line } = useTranslate()

    return (
        <Link to={id ? `/person/${id}` : '/404'} className="font-semibold text-lg sm:text-xl md:text-[22px] lg:text-sm xl:text-base 2xl:text-lg tracking-wider leading-7.5 sm:leading-8.25 md:leading-9 lg:leading-6 xl:leading-6.75 2xl:leading-7.5 truncate transition-all duration-300 ease-in-out text-title hover:text-orange-500">
            {
                name ?? line('notInformed')
            }
        </Link>
    )
}