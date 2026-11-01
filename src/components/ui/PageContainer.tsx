export default function PageContainer({ children, customLimit, removeXPadding, removeYPadding, center, customGap, fixedHeight }: { children: React.ReactNode, customLimit?: boolean, removeXPadding?: boolean, removeYPadding?: boolean, center?: boolean, customGap?: string, fixedHeight?: boolean }) {
    return (
        <div className={`w-full flex flex-col lg:mx-auto ${customGap ?? 'gap-7 sm:gap-8 md:gap-9 lg:gap-7 xl:gap-8 2xl:gap-9'} ${!customLimit && 'sm:max-w-96 md:max-w-md lg:max-w-156 xl:max-w-3xl 2xl:max-w-4xl'} ${!removeYPadding && 'py-8 sm:py-9 md:py-10 lg:py-8 xl:py-9 2xl:py-10'} ${!removeXPadding && 'px-8 sm:px-0'} ${center ? 'min-h-dvh items-center justify-center py-0' : `items-stretch ${fixedHeight ? 'h-[calc(100dvh-var(--header-height)-4rem)] sm:h-[calc(100dvh-var(--header-height)-4.5rem)] md:h-[calc(100dvh-var(--header-height)-5rem)] lg:h-[calc(100dvh-var(--header-height))]' : 'min-h-[calc(100dvh-var(--header-height)-4rem)] sm:min-h-[calc(100dvh-var(--header-height)-4.5rem)] md:min-h-[calc(100dvh-var(--header-height)-5rem)] lg:min-h-[calc(100dvh-var(--header-height))]'}`}`}>
            {children}
        </div>
    )
}