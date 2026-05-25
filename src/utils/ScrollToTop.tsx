import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToTop({ children }: { children: React.ReactNode }) {

    const { pathname } = useLocation()

    useEffect(() => {

        const container = document.querySelector(".scroll-container")

        if (container) {

            container.classList.remove("scroll-smooth")

            container.scrollTo({
                top: 0
            })

            requestAnimationFrame(() => {
                container.classList.add("scroll-smooth")
            })
        }

    }, [pathname])

    return children
}