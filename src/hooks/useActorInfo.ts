import { useEffect, useState } from "react";
import { getPersonCredits } from "../services/tmdb/tmdb.services";
import type { PersonCredits } from "../types/tmdb";

export default function usePersonInfo(id: number) {

    const [info, setInfo] = useState<PersonCredits | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function load() {
            setLoading(true)
            const data = await getPersonCredits(id)
            setInfo(data)
            setLoading(false)
        }

        load()

    }, [id])

    return {
        info,
        loading
    }

}