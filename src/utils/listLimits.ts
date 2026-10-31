import type { UserList } from "../types/tmdb"

export const maxLists = 50
export const maxItems = 200

const LISTS_LIMIT_MESSAGE = "List limit reached"
const ITEMS_LIMIT_MESSAGE = "List item limit reached"

export type ListLimitKind = "lists" | "items"

export class ListLimitError extends Error {
    kind: ListLimitKind

    constructor(kind: ListLimitKind) {
        super(
            kind === "lists"
                ? `${LISTS_LIMIT_MESSAGE}: a user can have at most ${maxLists} lists`
                : `${ITEMS_LIMIT_MESSAGE}: a list can have at most ${maxItems} items`
        )
        this.name = "ListLimitError"
        this.kind = kind
    }
}

export function toListLimitError(error: { message?: string }): ListLimitError | null {
    if (error.message?.includes(ITEMS_LIMIT_MESSAGE)) return new ListLimitError("items")
    if (error.message?.includes(LISTS_LIMIT_MESSAGE)) return new ListLimitError("lists")
    return null
}

export function countUserLists(lists: UserList[] | null) {
    return lists?.length ?? 0
}

export function hasReachedListLimit(lists: UserList[] | null) {
    return countUserLists(lists) >= maxLists
}

export function hasReachedItemLimit(itemsCount: number) {
    return itemsCount >= maxItems
}