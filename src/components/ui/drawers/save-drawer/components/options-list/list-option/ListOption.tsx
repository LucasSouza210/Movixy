import type { UserList } from "../../../../../../../types/tmdb";
import OptionPreview from "./components/option-preview/OptionPreview";
import OptionInfo from "./components/option-info/OptionInfo";
import OptionSelect from "./components/OptionSelect";

export default function ListOption({ list }: { list: UserList }) {
    return (
        <div className="w-full aspect-5/2 flex items-center gap-4 p-4 rounded-[20px] border border-default bg-white dark:bg-zinc-800/20">
            <div className="h-full flex gap-3">
                <OptionPreview />
                <OptionInfo title={list.title} desc={list.description} fixed={list.fixed} />
            </div>
            <OptionSelect />
        </div>
    )
}