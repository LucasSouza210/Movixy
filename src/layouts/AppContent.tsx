import { Outlet } from "react-router-dom";

export default function AppContent() {
    return (
        <div className="w-full min-h-full relative flex flex-col sm:items-center lg:items-start flex-1 px-8 sm:px-0 pt-15 sm:pt-16 md:pt-17 lg:pt-14 xl:pt-15.5 2xl:pt-17 overflow-x-hidden">
            <Outlet />
        </div>
    )
}