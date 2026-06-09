export default function FilterSection({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col gap-4">
            <p className="text-sm font-medium tracking-wider leading-none text-black dark:text-white">{title}</p>
            {children}
        </div>
    )
}