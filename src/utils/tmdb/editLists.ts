import type { ListItemMediaType } from "../../types/tmdb"
import { addItemToList, removeItemFromList } from "../../services/lists-services/listsServices"

export async function editLists(itemId: number, itemType: ListItemMediaType, selectedLists: string[], originalLists: string[] | null) {

    const original = originalLists ?? []

    const toAdd = selectedLists.filter((id) => !original.includes(id))
    const toRemove = original.filter((id) => !selectedLists.includes(id))

    const results = await Promise.allSettled([
        ...toAdd.map((listId) => addItemToList(listId, itemId, itemType)),
        ...toRemove.map((listId) => removeItemFromList(listId, itemId, itemType)),
    ])

    const errors = results.filter((r) => r.status === "rejected")
    if (errors.length > 0) {
        console.error("Failed to update some lists:", errors)
        throw new Error("Could not update all selected lists.")
    }
}