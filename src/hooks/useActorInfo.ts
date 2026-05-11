import { useEffect, useState } from "react";
import { getActorCredits } from "../services/movies/movies.services";
import type { ActorCredits } from "../types/tmdb";

export default function useActorInfo(id: number) {

    const [info, setInfo] = useState<ActorCredits | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function load() {
            setLoading(true)
            const data = await getActorCredits(id)
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