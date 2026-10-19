import { useContext } from "react"
import { Contexts } from "../../../contexts/ContextsProvider"
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import HeaderButton from "./HeaderButton";

export default function ModeButton() {

    const contexts = useContext(Contexts)

    const { mode, setMode } = contexts!

    const Icon = mode == 'light' ? FaRegSun : FaRegMoon

    return (
        <HeaderButton className="aspect-square" onClick={() => setMode(mode == 'dark' ? 'light' : 'dark')}>
            <Icon className='size-2/5' />
        </HeaderButton>
    )
}