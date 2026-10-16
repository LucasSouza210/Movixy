import { useContext, useState } from "react";
import { Contexts } from "../../../../../../contexts/ContextsProvider";
import type { SaveTarget } from "../../../../../../types/tmdb";
import DrawerTitle from "../ui/DrawerTitle";
import OptionsList from "./components/options-list/OptionsList";
import Actions from "./components/actions/Actions";

export default function SaveDrawer({ item }: { item: SaveTarget }) {

    const contexts = useContext(Contexts)
    const { userLists } = contexts!

    const [selected, setSelected] = useState<string[]>([])
    const [original, setOriginal] = useState<string[]>([])

    return (
        <div className="w-full lg:w-80 xl:w-94 2xl:w-108 flex flex-col items-start gap-6 sm:gap-7 md:gap-8 lg:gap-6 xl:gap-6 2xl:gap-7 lg:p-7 xl:p-8 2xl:p-9">
            <DrawerTitle title="myLists" />
            <OptionsList
                item={item}
                lists={userLists ?? []}
                onSelectionChange={(sel, orig) => {
                    setSelected(sel)
                    setOriginal(orig)
                }}
            />
            <Actions item={item} selected={selected} original={original} />
        </div>
    )
}