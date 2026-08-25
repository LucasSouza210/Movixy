import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser, loginWithGoogle as loginWithGoogleService, loginWithFacebook as loginWithFacebookService, registerUser, logoutUser } from "../services/auth-services/authServices"
import { getAuthErrorField, translateAuthError } from "../utils/authErrors"
import { Contexts } from "../contexts/ContextsProvider"

type FieldErrorSetter = (field: "name" | "email" | "password", message: string) => void

export function useAuth() {
    const navigate = useNavigate()

    const ctx = useContext(Contexts)
    if (!ctx) throw new Error("useAuth deve ser usado dentro de ContextsProvider")

    const {
        session, user, authInitializing,
        authLoading: loading, setAuthLoading: setLoading,
        authError: serverError, setAuthError: setServerError,
    } = ctx

    function handleAuthError(error: unknown, setFieldError?: FieldErrorSetter) {
        const fieldError = getAuthErrorField(error)

        if (fieldError && setFieldError) {
            setFieldError(fieldError.field, fieldError.message)
            return
        }

        setServerError(translateAuthError(error))
    }

    async function login(email: string, password: string, setFieldError?: FieldErrorSetter) {
        setLoading(true)
        setServerError(null)
        try {
            await loginUser(email, password)
            navigate("/")
            return true
        } catch (error) {
            handleAuthError(error, setFieldError)
            return false
        } finally {
            setLoading(false)
        }
    }

    async function loginWithGoogle() {
        setLoading(true)
        setServerError(null)

        try {
            await loginWithGoogleService()

            return true
        } catch (error) {
            handleAuthError(error)

            setLoading(false)

            return false
        }
    }

    async function loginWithFacebook() {
        setLoading(true)
        setServerError(null)

        try {
            await loginWithFacebookService()

            return true
        } catch (error) {
            handleAuthError(error)

            setLoading(false)

            return false
        }
    }

    async function register(email: string, password: string, name: string, setFieldError?: FieldErrorSetter) {
        setLoading(true)
        setServerError(null)
        try {
            await registerUser(email, password, name)
            navigate("/")
            return true
        } catch (error) {
            handleAuthError(error, setFieldError)
            return false
        } finally {
            setLoading(false)
        }
    }

    async function logout() {
        setLoading(true)
        setServerError(null)
        try {
            await logoutUser()
            navigate("/auth")
            return true
        } catch (error) {
            handleAuthError(error)
            return false
        } finally {
            setLoading(false)
        }
    }

    return {
        login, register, logout, loading, serverError, loginWithGoogle, loginWithFacebook, session, user, authInitializing,
    }
}