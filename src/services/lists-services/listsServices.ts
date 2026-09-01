import type { ListItem, ListItemMediaType, ListType, UserList } from "../../types/tmdb"
import { supabase } from "../api/supabase"


export type ListWithItems = UserList & {
    list_items: ListItem[]
}

export async function getUserLists() {
    const { data, error } = await supabase
        .from("lists")
        .select("*")
        .order("created_at", { ascending: true })

    if (error) throw error
    return data as UserList[]
}

export async function getListById(listId: string) {
    const { data, error } = await supabase
        .from("lists")
        .select("*, list_items(*)")
        .eq("id", listId)
        .single()

    if (error) throw error
    return data as ListWithItems
}

export async function createList(title: string, type: ListType, description?: string, isPublic = false) {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error("Usuário não autenticado")

    const { data, error } = await supabase
        .from("lists")
        .insert({ title, description, type, is_public: isPublic, fixed: false, user_id: user.id })
        .select()
        .single()

    if (error) throw error
    return data as UserList
}

export async function updateList(listId: string, updates: Partial<Pick<UserList, "title" | "description" | "is_public">>) {
    const { data, error } = await supabase
        .from("lists")
        .update(updates)
        .eq("id", listId)
        .select()
        .single()

    if (error) throw error
    return data as UserList
}

export async function deleteList(listId: string) {
    const { error } = await supabase
        .from("lists")
        .delete()
        .eq("id", listId)

    if (error) throw error
}

export async function addItemToList(listId: string, mediaId: number, mediaType: ListItemMediaType) {
    const { data, error } = await supabase
        .from("list_items")
        .insert({ list_id: listId, media_id: mediaId, media_type: mediaType })
        .select()
        .single()

    if (error) throw error
    return data as ListItem
}

export async function removeItemFromList(listId: string, mediaId: number, mediaType: ListItemMediaType) {
    const { error } = await supabase
        .from("list_items")
        .delete()
        .eq("list_id", listId)
        .eq("media_id", mediaId)
        .eq("media_type", mediaType)

    if (error) throw error
}

export async function isItemInList(listId: string, mediaId: number, mediaType: ListItemMediaType) {
    const { data, error } = await supabase
        .from("list_items")
        .select("id")
        .eq("list_id", listId)
        .eq("media_id", mediaId)
        .eq("media_type", mediaType)
        .maybeSingle()

    if (error) throw error
    return data !== null
}

export async function getListsContainingItem(mediaId: number, mediaType: ListItemMediaType): Promise<string[]> {
    const { data, error } = await supabase
        .from("list_items")
        .select("list_id")
        .eq("media_id", mediaId)
        .eq("media_type", mediaType)

    if (error) throw error
    return data.map((item) => item.list_id)
}