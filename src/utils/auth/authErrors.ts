import type { AuthError } from "@supabase/supabase-js"

type FieldErrorMap = {
    field: "email" | "password"
    message: string
}

const fieldErrorsByCode: Record<string, FieldErrorMap> = {
    invalid_credentials: { field: "password", message: "Email ou senha incorretos" },
    user_already_exists: { field: "email", message: "Este email já está cadastrado" },
    email_address_invalid: { field: "email", message: "Email inválido" },
    weak_password: { field: "password", message: "Senha muito fraca, escolha outra" },
}

const genericErrorsByCode: Record<string, string> = {
    over_request_rate_limit: "Muitas tentativas. Aguarde um instante e tente novamente",
    email_not_confirmed: "Confirme seu email antes de entrar",
    over_email_send_rate_limit: "Aguarde antes de solicitar outro email",
}

export function getAuthErrorField(error: unknown): FieldErrorMap | null {
    const authError = error as AuthError
    const code = authError?.code

    if (code && fieldErrorsByCode[code]) {
        return fieldErrorsByCode[code]
    }

    if (!code && authError?.status === 400) {
        return { field: "password", message: "Email ou senha incorretos" }
    }

    return null
}

export function translateAuthError(error: unknown): string {
    const code = (error as AuthError)?.code
    if (!code) return "Ocorreu um erro. Tente novamente."
    return genericErrorsByCode[code] ?? "Ocorreu um erro. Tente novamente."
}