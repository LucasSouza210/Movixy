import { supabase } from "../api/supabase"

export async function getLikedPeople(): Promise<number[]> {
    const { data, error } = await supabase
        .from("liked_people")
        .select("person_id")
        .order("created_at", { ascending: false })

    if (error) throw error
    return data.map((row) => row.person_id)
}

export async function isPersonLiked(personId: number): Promise<boolean> {
    const { data, error } = await supabase
        .from("liked_people")
        .select("id")
        .eq("person_id", personId)
        .maybeSingle()

    if (error) throw error
    return data !== null
}

export async function likePerson(personId: number) {
    const { error } = await supabase
        .from("liked_people")
        .insert({ person_id: personId })

    // 23505 = already liked, safe to ignore
    if (error && error.code !== "23505") throw error
}

export async function unlikePerson(personId: number) {
    const { error } = await supabase
        .from("liked_people")
        .delete()
        .eq("person_id", personId)

    if (error) throw error
}