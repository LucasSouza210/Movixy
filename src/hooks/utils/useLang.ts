import { useContext } from "react"
import { Contexts } from "../../contexts/ContextsProvider"

export default function useLang() {

    const { lang } = useContext(Contexts)!

    return lang
}