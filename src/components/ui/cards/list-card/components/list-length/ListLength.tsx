import { useTranslate } from "../../../../../../translations/Translations"
import { LuFilm, LuUsers } from "react-icons/lu";

export default function ListLength({ length, type }: { length: number | undefined | null, type: 'media' | 'person' | null | undefined }) {

    const { line } = useTranslate()

    const Icon = type ? type == 'person' ? LuUsers : LuFilm : LuFilm

    const label = type ? type == 'person' ? line(length == 1 ? 'person' : 'people') : line(length == 1 ? 'work' : 'works') : line(length == 1 ? 'work' : 'works')

    return (
        <div className="w-full flex pt-3 border-t border-default">
            <p className="flex items-center gap-1.5 text-sm font-medium tracking-wider text-zinc-500 dark:text-zinc-400">
                <Icon />
                {`${length ?? 0} ${label}`}
            </p>
        </div>
    )
}