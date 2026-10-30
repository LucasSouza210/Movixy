import { useState, useCallback } from "react"
import { getUserLists, createList, updateList, deleteList, addItemToList, removeItemFromList } from "../../services/lists-services/listsServices"
import type { UserList } from "../../types/tmdb"

export function useLists() {
    const [lists, setLists] = useState<UserList[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const fetchLists = useCallback(async () => {
        setLoading(true)
        setError(null)
        try {
            const data = await getUserLists()
            setLists(data)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Erro ao buscar listas")
        } finally {
            setLoading(false)
        }
    }, [])

    return { lists, loading, error, fetchLists, createList, updateList, deleteList, addItemToList, removeItemFromList }
}