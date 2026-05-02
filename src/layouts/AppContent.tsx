import { Outlet } from "react-router-dom";

export default function AppContent() {
    return (
        <div className="min-h-[calc(100dvh-60px)] sm:min-h-[calc(100dvh-64px)] md:min-h-[calc(100dvh-68px)] lg:min-h-[calc(100dvh-56px)] xl:min-h-[calc(100dvh-62px)] 2xl:min-h-[calc(100dvh-68px)] relative flex flex-col items-center flex-1 px-8 sm:px-0 bg-zinc-100 dark:bg-zinc-950">
            <Outlet />
        </div>
    )
}