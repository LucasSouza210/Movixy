import { useContext, useEffect, useState } from "react";
import { Contexts } from "../../../../contexts/ContextsProvider";
import { getListsContainingItem } from "../../../../services/lists-services/listsServices";
import type { SaveTarget } from "../../../../types/tmdb";
import DrawerTitle from "../ui/DrawerTitle";
import OptionsList from "./components/options-list/OptionsList";
import SaveDrawerActions from "./components/save-drawer-actions/SaveDrawerActions";

export default function SaveDrawer({ item }: { item: SaveTarget }) {

    const contexts = useContext(Contexts)
    const { userLists } = contexts!

    const [originalLists, setOriginalLists] = useState<string[] | null>(null)
    const [selected, setSelected] = useState<string[] | null>(null)

    const toggle = (listId: string) => {
        setSelected((prev) => {
            if (!prev) return prev
            return prev.includes(listId) ? prev.filter((id) => id !== listId) : [...prev, listId]
        })
    }

    useEffect(() => {
        if (!item.type) return

        getListsContainingItem(item.id, item.type).then((lists) => {
            setOriginalLists(lists)
            setSelected(lists)
        }).catch(console.error)
    }, [item.id, item.type])

    return (
        <div className="w-full lg:h-100 xl:h-112 2xl:h-124 lg:aspect-6/7 flex flex-col items-start gap-6 sm:gap-7 md:gap-8 lg:gap-6 xl:gap-6 2xl:gap-7 lg:p-7 xl:p-8 2xl:p-9 lg:rounded-[30px] bg-zinc-50 dark:bg-zinc-900">
            <DrawerTitle title="myLists" />
            <OptionsList lists={userLists ?? []} selected={selected ?? []} onToggle={toggle} />
            <SaveDrawerActions item={item} selected={selected} original={originalLists} />
        </div>
    )
}