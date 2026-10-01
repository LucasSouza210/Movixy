import type { UserList } from "../../../../types/tmdb";
import ChoicePreview from "./components/choice-preview/ChoicePreview";
import ChoiceInfo from "./components/choice-info/ChoiceInfo";
import ChoiceSelect from "./components/ChoiceSelect";

export default function ChoiceCard({ list, selected, onToggle }: { list: UserList, selected: boolean, onToggle: () => void }) {
    return (
        <div className={`w-full h-fit flex items-center justify-between gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-4.25 2xl:gap-4.5 p-4 sm:p-5 md:p-6 lg:p-4 xl:p-4.25 2xl:p-4.5 rounded-[20px] sm:rounded-[23px] md:rounded-[26px] lg:rounded-[18px] xl:rounded-[20px] 2xl:rounded-[22px] border action-default border-action ${selected ? 'border-zinc-400/50 dark:border-zinc-600/50' : 'border-default'}`} onClick={onToggle}>
            <div className="w-full flex gap-3.5 sm:gap-4.5 md:gap-5.5 lg:gap-3 xl:gap-3.5 2xl:gap-4">
                <ChoicePreview listId={list.id} />
                <ChoiceInfo title={list.title} desc={list.description} fixed={list.fixed} />
            </div>
            <ChoiceSelect selected={selected} />
        </div>
    )
}