import type { UserList } from "../../../../../../types/tmdb"
import ListOption from "./list-option/ListOption"

export default function OptionsList({ lists, selected, onToggle }: { lists: UserList[], selected: string[], onToggle: (id: string) => void }) {
    return (
        <div className="w-full flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-5">
            {
                lists.map((list) => (
                    <ListOption list={list} selected={selected.includes(list.id)} onToggle={() => onToggle(list.id)} key={list.id}
                    />
                ))
            }
        </div>
    )
}