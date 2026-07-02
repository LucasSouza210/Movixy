import { Outlet } from "react-router-dom";

export default function AppContent() {
    return (
        <div className="w-full min-h-full relative flex flex-col sm:items-center lg:items-start flex-1 px-8 sm:px-0 overflow-x-hidden">
            <Outlet />
        </div>
    )
}