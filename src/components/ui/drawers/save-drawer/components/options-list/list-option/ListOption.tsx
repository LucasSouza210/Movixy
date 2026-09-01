import type { UserList } from "../../../../../../../types/tmdb";
import OptionPreview from "./components/option-preview/OptionPreview";
import OptionInfo from "./components/option-info/OptionInfo";
import OptionSelect from "./components/OptionSelect";

export default function ListOption({ list, selected, onToggle }: { list: UserList, selected: boolean, onToggle: () => void }) {
    return (
        <div className={`w-full aspect-5/2 flex items-center justify-between gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-4.25 2xl:gap-4.5 p-4 sm:p-5 md:p-6 lg:p-4 xl:p-4.25 2xl:p-4.5 rounded-[20px] sm:rounded-[23px] md:rounded-[26px] lg:rounded-[20px] border bg-white dark:bg-zinc-800/20 ${selected ? 'border-zinc-400/60 dark:border-zinc-600' : 'border-zinc-300 dark:border-zinc-700/70'}`} onClick={onToggle}>
            <div className="h-full flex gap-3.5 sm:gap-4.5 md:gap-5.5 lg:gap-3 xl:gap-3.5 2xl:gap-4">
                <OptionPreview list={list.list_items} />
                <OptionInfo title={list.title} desc={list.description} fixed={list.fixed} />
            </div>
            <OptionSelect selected={selected} />
        </div>
    )
}