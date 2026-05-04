export default function PageContainer ({children}: {children: React.ReactNode}) {
    return (
        <div className="w-full sm:max-w-96 md:max-w-md lg:max-w-156 xl:max-w-3xl 2xl:max-w-4xl min-h-[calc(100dvh-60px)] sm:min-h-[calc(100dvh-64px)] md:min-h-[calc(100dvh-68px)] lg:min-h-[calc(100dvh-56px)] xl:min-h-[calc(100dvh-62px)] 2xl:min-h-[calc(100dvh-68px)] lg:mx-auto items-stretch py-8 sm:py-10 md:py-12 lg:py-8 xl:py-9 2xl:py-10">
            {children}
        </div>
    )
}