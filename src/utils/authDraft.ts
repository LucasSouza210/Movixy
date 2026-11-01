export type AuthDraft = {
    name: string
    email: string
    password: string
    terms: boolean
    savedAt: number
}

const authDraftTtl = 15 * 60 * 1000

let currentDraft: AuthDraft | null = null

export function saveAuthDraft(draft: Omit<AuthDraft, 'savedAt'>) {
    currentDraft = { ...draft, savedAt: Date.now() }
}

export function getAuthDraft(): AuthDraft | null {
    if (!currentDraft) return null

    if (Date.now() - currentDraft.savedAt > authDraftTtl) {
        currentDraft = null
        return null
    }

    return currentDraft
}

export function setAuthDraftTerms(terms: boolean) {
    if (!currentDraft) return
    currentDraft = { ...currentDraft, terms }
}

export function clearAuthDraft() {
    currentDraft = null
}