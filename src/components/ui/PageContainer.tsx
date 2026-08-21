export default function PageContainer({ children, removePadding, center }: { children: React.ReactNode, removePadding?: boolean, center?: boolean }) {

    return (
        <div className={`w-full sm:max-w-96 md:max-w-md lg:max-w-156 xl:max-w-3xl 2xl:max-w-4xl flex lg:mx-auto ${!removePadding && 'px-8 sm:px-0 py-8 sm:py-10 md:py-12 lg:py-8 xl:py-9 2xl:py-10'} ${center ? 'min-h-dvh items-center justify-center py-0' : 'min-h-[calc(100dvh-var(--header-height)-4rem)] sm:min-h-[calc(100dvh-var(--header-height)-4.5rem)] md:min-h-[calc(100dvh-var(--header-height)-5rem)] lg:min-h-[calc(100dvh-var(--header-height))] items-stretch'}`}>
            {children}
        </div>
    )
}