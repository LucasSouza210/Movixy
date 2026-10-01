import { useContext, useState } from "react";
import { Contexts } from "../../../../contexts/ContextsProvider";
import type { SaveTarget } from "../../../../types/tmdb";
import DrawerTitle from "../ui/DrawerTitle";
import OptionsList from "./components/options-list/OptionsList";
import SaveDrawerActions from "./components/save-drawer-actions/SaveDrawerActions";

export default function SaveDrawer({ item }: { item: SaveTarget }) {

    const contexts = useContext(Contexts)
    const { userLists } = contexts!

    const [selected, setSelected] = useState<string[]>([])
    const [original, setOriginal] = useState<string[]>([])

    return (
        <div className="w-full lg:min-h-100 xl:min-h-112 2xl:min-h-124 lg:aspect-6/7 flex flex-col items-start gap-6 sm:gap-7 md:gap-8 lg:gap-6 xl:gap-6 2xl:gap-7 lg:p-7 xl:p-8 2xl:p-9 lg:rounded-[30px]">
            <DrawerTitle title="myLists" />
            <OptionsList
                item={item}
                lists={userLists ?? []}
                onSelectionChange={(sel, orig) => {
                    setSelected(sel)
                    setOriginal(orig)
                }}
            />
            <SaveDrawerActions item={item} selected={selected} original={original} />
        </div>
    )
}