import { useContext } from "react"
import { Contexts } from "../../../contexts/ContextsProvider"
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import HeaderButton from "./HeaderButton";

export default function ModeButton() {

    const { mode, setMode } = useContext(Contexts)!

    const isLight = mode == 'light'

    const Icon = isLight ? FaRegSun : FaRegMoon

    return (
        <HeaderButton className="aspect-square" label={isLight ? 'ariaSwitchToDark' : 'ariaSwitchToLight'} onClick={() => setMode(isLight ? 'dark' : 'light')}>
            <Icon className='size-2/5' />
        </HeaderButton>
    )
}