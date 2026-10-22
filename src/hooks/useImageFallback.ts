import { useState } from "react"

export function useImageFallback(source: string | null | undefined) {

    const [failed, setFailed] = useState<string | null>(null)

    const src = source && source !== failed ? source : null

    const onError = () => {
        if (source) setFailed(source)
    }

    return { src, onError }
}