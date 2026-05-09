import { useContext } from "react"
import { Contexts } from "../contexts/ContextsProvider"

export default function useLang() {

    const contexts = useContext(Contexts)

    const { lang } = contexts!

    return lang
}