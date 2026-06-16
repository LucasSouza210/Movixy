export default function Drawer({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-auto min-h-100 flex flex-col items-center gap-10 rounded-t-[50px] p-10 bg-zinc-50 dark:bg-zinc-900">
            <span className="w-16 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700"/>
            {children}
        </div>
    )
}