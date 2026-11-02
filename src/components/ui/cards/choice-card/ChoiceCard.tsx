import { useEffect, useState } from "react";
import type { UserList } from "../../../../types/tmdb";
import { getListItemsCount } from "../../../../services/lists-services/listsServices";
import { hasReachedItemLimit } from "../../../../utils/listLimits";
import Preview from "./components/preview/Preview";
import Info from "./components/info/Info";
import Select from "./components/Select";

export default function ChoiceCard({ list, selected, onToggle }: { list: UserList, selected: boolean, onToggle: () => void }) {

    const [itemsCount, setItemsCount] = useState<number | null>(null)

    const [wasSelected, setWasSelected] = useState(selected)

    if (selected && !wasSelected) setWasSelected(true)

    useEffect(() => {
        let active = true

        getListItemsCount(list.id)
            .then((count) => {
                if (active) setItemsCount(count)
            })
            .catch((error) => console.error("Failed to count list items:", error))

        return () => {
            active = false
        }
    }, [list.id])

    const full = itemsCount !== null && hasReachedItemLimit(itemsCount)
    const disabled = full && !wasSelected

    const handleClick = () => {
        if (disabled) return
        onToggle()
    }

    return (
        <div aria-disabled={disabled} className={`w-full h-fit flex items-center justify-between gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-4.25 2xl:gap-4.5 p-4 sm:p-5 md:p-6 lg:p-4 xl:p-4.25 2xl:p-4.5 rounded-[20px] sm:rounded-[23px] md:rounded-[26px] lg:rounded-[18px] xl:rounded-[20px] 2xl:rounded-[22px] border ${full ? 'cursor-not-allowed bg-elevated border-default' : 'action-elevated border-action'} ${selected ? 'border-zinc-400/50 dark:border-zinc-600/50' : 'border-default'}`} onClick={handleClick}>
            <div className="w-full flex gap-3.5 sm:gap-4.5 md:gap-5.5 lg:gap-3 xl:gap-3.5 2xl:gap-4">
                <Preview listId={list.id} />
                <Info title={list.title} desc={list.description} fixed={list.fixed} />
            </div>
            <Select selected={selected} />
        </div>
    )
}