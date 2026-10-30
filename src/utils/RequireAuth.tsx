import { useAuth } from "../hooks/auth/useAuth"
import { Navigate, Outlet } from "react-router-dom"

export default function RequireAuth() {

    const { user, authInitializing } = useAuth()

    if (authInitializing) return null

    if (!user) return <Navigate to="/" replace />

    return <Outlet />
}