import { Outlet } from "react-router-dom";

export default function AppContent() {
    return (
        <div className="min-h-full relative flex flex-col sm:items-center lg:items-start flex-1 px-8 sm:px-0 bg-zinc-100 dark:bg-zinc-950">
            <Outlet />
        </div>
    )
}