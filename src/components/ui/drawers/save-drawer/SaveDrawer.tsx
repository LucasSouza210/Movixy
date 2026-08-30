import DrawerTitle from "../ui/DrawerTitle";
import OptionsList from "./components/options-list/OptionsList";

export default function SaveDrawer() {
    return (
        <div className="w-full lg:h-100 lg:aspect-2/3 flex flex-col items-start gap-6 bg-zinc-50 dark:bg-zinc-900">
            <DrawerTitle title="myLists" />
            <OptionsList />
        </div>
    )
}