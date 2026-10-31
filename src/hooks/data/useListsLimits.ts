import { useContext } from "react"
import { Contexts } from "../../contexts/ContextsProvider"
import { maxLists, countUserLists } from "../../utils/listLimits"

export default function useListLimits() {

    const { userLists } = useContext(Contexts)!

    const listsCount = countUserLists(userLists)

    return {
        listsCount,
        maxLists: maxLists,
        listLimitReached: listsCount >= maxLists,
        listLimitNear: listsCount >= maxLists - 5,
    }
}