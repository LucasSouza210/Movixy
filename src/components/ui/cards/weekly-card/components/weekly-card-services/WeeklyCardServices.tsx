import { useContext, useEffect, useState } from "react"
import { Contexts } from "../../../../../../contexts/ContextsProvider"
import { getWatchProviders } from "../../../../../../services/tmdb/tmdb.services"
import PosterServiceLink from "./PosterServiceLink"
import type { WatchProvider } from "../../../../../../types/tmdb"

export default function MediaPosterServices({ id, mediaType }: { id: number | undefined, mediaType: string | undefined }) {

    const contexts = useContext(Contexts)

    const { country } = contexts!

    const [services, setServices] = useState<WatchProvider[]>([])

    useEffect(() => {

        async function load() {

            if (!id || !country) {
                setServices([])
                return
            }

            const providers = await getWatchProviders(mediaType, 274, country)

            setServices(providers)
        }

        load()

    }, [mediaType, id, country])

    return (
        <div className="w-fit flex items-center justify-center gap-2 md:gap-3 py-2.5 md:py-3.5 px-3 sm:px-4 md:px-5 border-2 rounded-full backdrop-blur-[2px] bg-zinc-900/40 border-zinc-600/40">
            {
                services &&
                services.map((i, index) => (
                    <PosterServiceLink service={i} key={index} />
                ))
            }
        </div>
    )
}