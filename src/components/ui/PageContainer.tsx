import { useLocation } from "react-router-dom"

export default function PageContainer({ children }: { children: React.ReactNode }) {

    const { pathname } = useLocation()

    const notFound = pathname == '/404'

    return (
        <div className={`w-full sm:max-w-96 md:max-w-md lg:max-w-156 xl:max-w-3xl 2xl:max-w-4xl min-h-[calc(100dvh-var(--header-height)-4rem)] sm:min-h-[calc(100dvh-var(--header-height)-4.5rem)] md:min-h-[calc(100dvh-var(--header-height)-5rem)] lg:min-h-[calc(100dvh-var(--header-height))] flex lg:mx-auto items-stretch ${!notFound && 'py-8 sm:py-10 md:py-12 lg:py-8 xl:py-9 2xl:py-10'}`}>
            {children}
        </div>
    )
}