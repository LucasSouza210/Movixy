import { LuFilm, LuUsers } from "react-icons/lu";

export default function ListLength({ length, type }: { length: number | undefined | null, type: 'media' | 'person' | null | undefined }) {

    const Icon = type ? type == 'person' ? LuUsers : LuFilm : LuFilm

    return (
        <span className="flex items-center gap-1 text-xs font-medium tracking-wider px-3 py-1.5 border border-default rounded-full bg-zinc-50 dark:bg-zinc-900/50 text-zinc-500 dark:text-zinc-400">
            <Icon className="size-2.5" />
            {`${length ?? 0}`}
        </span>
    )
}