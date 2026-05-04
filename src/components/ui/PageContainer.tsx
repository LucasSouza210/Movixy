export default function PageContainer ({children}: {children: React.ReactNode}) {
    return (
        <div className="min-w-full flex-1 py-8 sm:py-0">
            {children}
        </div>
    )
}