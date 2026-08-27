export default function Skeleton({ className, containerClassName, lines }: { className: string, containerClassName?: string, lines?: number }) {

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
        <span className={`skeleton ${className}`} />
    )
}