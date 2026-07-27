import { useTranslate } from "../../../../../translations/Translations"
import { LuExternalLink } from "react-icons/lu";

export default function TmdbLink() {

    const { line } = useTranslate()

    return (
        <a className="flex items-center gap-1.5 text-sm font-medium tracking-wider leading-none text-cyan-500" href="https://www.themoviedb.org">
            {line('learnMoreTmdb')}
            <LuExternalLink />
        </a>
    )
}