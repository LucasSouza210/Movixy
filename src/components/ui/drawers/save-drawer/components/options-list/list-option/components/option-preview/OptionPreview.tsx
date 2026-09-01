import { useEffect, useState } from "react";
import { getPaths } from "../../../../../../../../../utils/tmdb/getPaths";
import type { ListItem } from "../../../../../../../../../types/tmdb";
import { LuImageOff } from "react-icons/lu";
import PreviewItem from "./PreviewItem";
import useLang from "../../../../../../../../../hooks/useLang";

export default function OptionPreview({ list }: { list: ListItem[] | undefined }) {

    const lang = useLang()

    const [paths, setPaths] = useState<(string | null)[] | null>(null)

    useEffect(() => {
        if (!list || list.length === 0) {
            setPaths([])
            return
        }

        let active = true

        async function load() {
            try {
                const data = await getPaths(list!, lang, 4)
                if (active) setPaths(data)
            } catch (error) {
                console.error(error)
                if (active) setPaths([])
            }
        }

        load()

        return () => {
            active = false
        }
    }, [list, lang])

    return (
        <div className={`h-full aspect-2/3 rounded-[10px] sm:rounded-xl md:rounded-[14px] lg:rounded-[10px] xl:rounded-[11px] 2xl:rounded-xl border bg-alternative border-zinc-300 dark:border-zinc-700/70 ${list ? `grid ${list.length > 1 && 'grid-cols-2 grid-rows-2'}` : 'flex items-center justify-center'}`}>
            {
                paths && paths.length > 1 ?
                    paths.map((i, index) => (
                        <PreviewItem path={i} key={index} />
                    ))
                    :
                    <LuImageOff className="size-1/3 text-zinc-400" />
            }
        </div>
    )
}