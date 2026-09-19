export default function Skeleton({ className, containerClassName, lines, children }: { className: string, containerClassName?: string, lines?: number, children?: React.ReactNode }) {

    if (lines) {
        return (
            <div className={`flex flex-col ${containerClassName}`}>
                {
                    Array.from({ length: lines ?? 2 }).map((_, index) => (
                        <span className={`skeleton ${className} ${index === lines - 1 ? "w-2/3" : "w-full"}`} key={index} />
                    ))
                }
            </div>
        )
    }

    return (
        <span className={`skeleton ${className}`}>
            {children}
        </span>
    )
}