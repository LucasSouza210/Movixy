import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser, loginWithGoogle as loginWithGoogleService, loginWithFacebook as loginWithFacebookService, registerUser } from "../services/auth-services/authServices"
import { getAuthErrorField, translateAuthError } from "../utils/authErrors"

type FieldErrorSetter = (field: "email" | "password", message: string) => void

export function useAuth() {
    const [loading, setLoading] = useState<boolean>(false)
    const [serverError, setServerError] = useState<string | null>(null)
    const navigate = useNavigate()

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

    async function register(email: string, password: string, setFieldError?: FieldErrorSetter) {
        setLoading(true)
        setServerError(null)
        try {
            await registerUser(email, password)
            navigate("/")
            return true
        } catch (error) {
            handleAuthError(error, setFieldError)
            return false
        } finally {
            setLoading(false)
        }
    }

    return { login, register, loading, serverError, loginWithGoogle, loginWithFacebook }
}