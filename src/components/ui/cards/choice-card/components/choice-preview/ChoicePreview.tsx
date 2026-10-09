import { useEffect, useState } from "react";
import { getPaths } from "../../../../../../utils/tmdb/getPaths";
import { getListById } from "../../../../../../services/lists-services/listsServices";
import useLang from "../../../../../../hooks/useLang";
import { LuImageOff } from "react-icons/lu";
import PreviewItem from "./PreviewItem";

export default function ChoicePreview({ listId }: { listId: string }) {

    const lang = useLang()

    const [paths, setPaths] = useState<(string | null)[] | null>(null)

    useEffect(() => {
        let active = true

        async function load() {
            try {
                const listWithItems = await getListById(listId)
                const data = await getPaths(listWithItems.list_items ?? [], lang, 4)
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
    }, [listId, lang])

    return (
        <div className={`w-3/10 aspect-2/3 rounded-[10px] sm:rounded-xl md:rounded-[14px] lg:rounded-[10px] xl:rounded-[11px] 2xl:rounded-xl overflow-hidden border bg-elevated shrink-0 border-default ${paths && paths.length > 0 ? `grid ${paths.length > 1 && 'grid-cols-2 grid-rows-2'}` : 'flex items-center justify-center'}`}>
            {
                paths && paths.length > 0 ?
                    paths.filter((path): path is string => path !== null).map(path => (
                        <PreviewItem path={path} key={path} />
                    ))
                    :
                    <LuImageOff className="size-1/3 text-default" />
            }
        </div>
    )
}