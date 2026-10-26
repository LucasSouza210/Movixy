import { useEffect, useState } from "react"
import { useAuth } from "../../../../hooks/useAuth"
import { useUserInfo } from "../../../../hooks/useUserInfo"
import Skeleton from "../../../../components/ui/Skeleton"
import Banner from "./components/Banner"
import NoBanner from "./components/NoBanner"

type ImageResult = {
    url: string
    ok: boolean
}

export default function PerfilBanner() {

    const { user, authInitializing } = useAuth()

    const { profile, loading, error } = useUserInfo()

    const bannerUrl = profile?.banner_url ?? null

    const [result, setResult] = useState<ImageResult | null>(null)

    useEffect(() => {
        if (!bannerUrl) return

        let active = true
        const image = new Image()

        image.onload = () => {
            if (active) setResult({ url: bannerUrl, ok: true })
        }
        image.onerror = () => {
            if (active) setResult({ url: bannerUrl, ok: false })
        }
        image.src = bannerUrl

        return () => {
            active = false
            image.onload = null
            image.onerror = null
        }
    }, [bannerUrl])

    const settled = result?.url === bannerUrl
    const waitingProfile = !!user && !profile && !error
    const pending = authInitializing || loading || waitingProfile || (!!bannerUrl && !settled)
    const showBanner = !!bannerUrl && settled && result.ok

    return (
        <div className="w-full sm:max-w-110 md:max-w-lg lg:max-w-2xl xl:max-w-206 2xl:max-w-240 aspect-20/9 lg:aspect-28/9 overflow-hidden border-b sm:border-x sm:rounded-b-[10px] md:rounded-b-xl lg:rounded-b-lg xl:rounded-b-[10px] 2xl:rounded-b-xl border-default">
            {
                pending ?
                    <Skeleton className="flex skeleton" />
                    :
                    showBanner ?
                        <Banner path={bannerUrl} />
                        :
                        <NoBanner />
            }
        </div>
    )
}