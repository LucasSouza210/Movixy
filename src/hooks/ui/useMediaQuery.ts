import { useEffect, useState } from "react"

export default function useMediaQuery(query: string) {

    const [matches, setMatches] = useState(() => typeof window !== "undefined" && window.matchMedia(query).matches)

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query)
        const onChange = (event: MediaQueryListEvent) => setMatches(event.matches)

        setMatches(mediaQueryList.matches)
        mediaQueryList.addEventListener("change", onChange)

        return () => mediaQueryList.removeEventListener("change", onChange)
    }, [query])

    return matches
}