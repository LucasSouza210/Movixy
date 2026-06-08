export default function FilterSection({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-sm font-medium tracking-wider leading-none text-black dark:text-white">{title}</p>
            {children}
        </div>
    )
}