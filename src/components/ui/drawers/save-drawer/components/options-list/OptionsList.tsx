import { useEffect, useState } from "react"
import type { SaveTarget, UserList } from "../../../../../../types/tmdb"
import { getListsContainingItem } from "../../../../../../services/lists-services/listsServices"
import ChoiceCard from "../../../../cards/choice-card/ChoiceCard"
import ChoiceCardSkeleton from "../../../../cards/choice-card/ChoiceCardSkeleton"
import LimitedGridScroll from "../../../../scrolls/LimitedRowsScroll"

const gapPerBreakpoint = [5, 6, 7, 4, 4.5, 5]
const rowsPerView = [3, 3, 3, 3]
const columnsPerView = [1]

export default function OptionsList({ item, lists, onSelectionChange }: { item: SaveTarget, lists: UserList[], onSelectionChange: (selected: string[], original: string[]) => void }) {

    const [selected, setSelected] = useState<string[] | null>(null)
    const [original, setOriginal] = useState<string[] | null>(null)

    const loading = selected === null

    useEffect(() => {
        if (!item.type) {
            setSelected([])
            setOriginal([])
            return
        }

        getListsContainingItem(item.id, item.type)
            .then((result) => {
                setSelected(result)
                setOriginal(result)
            })
            .catch(console.error)
    }, [item.id, item.type])

    useEffect(() => {
        if (selected === null || original === null) return
        onSelectionChange(selected, original)
    }, [selected, original])

    const toggle = (listId: string) => {
        setSelected((prev) => {
            const current = prev ?? []
            return current.includes(listId) ? current.filter((id) => id !== listId) : [...current, listId]
        })
    }

    return (
        <LimitedGridScroll className="w-full" rowsPerView={rowsPerView} columnsPerView={columnsPerView} gapPerBreakpoint={gapPerBreakpoint}>
            {
                loading ?
                    lists.map((_, index) => <ChoiceCardSkeleton key={index} />)
                    :
                    lists.map((list) => (
                        <ChoiceCard list={list} selected={(selected ?? []).includes(list.id)} onToggle={() => toggle(list.id)} key={list.id} />
                    ))
            }
        </LimitedGridScroll>
    )
}