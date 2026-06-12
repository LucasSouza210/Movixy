export default function Drawer({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full min-h-100 flex flex-col items-center justify-center relative rounded-t-[50px] bg-white dark:bg-zinc-900">
            <span className="w-24 h-2 rounded-full absolute top-6 bg-zinc-300 dark:bg-zinc-700"/>
            {children}
        </div>
    )
}