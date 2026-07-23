import { useContext, useEffect, useState } from "react"
import { Contexts } from "../../../../../../contexts/ContextsProvider"
import { getWatchProviders } from "../../../../../../services/tmdb/tmdb.services"
import PosterService from "./PosterService"
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

            const providers = await getWatchProviders(mediaType, id, country)

            setServices(providers)
        }

        load()

    }, [mediaType, id, country])

    console.log(services, country)

    return (
        <div className="h-14 flex items-center gap-2 py-3 px-4 border-2 rounded-full backdrop-blur-[2px] bg-zinc-900/40 border-zinc-600/40">
            {
                services &&
                services.map((i, index) => (
                    <PosterService service={i} key={index} />
                ))
            }
        </div>
    )
}