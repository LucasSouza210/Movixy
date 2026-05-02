export default function PageContainer ({children}: {children: React.ReactNode}) {
    return (
        <div className="min-w-full flex-1">
            {children}
        </div>
    )
}