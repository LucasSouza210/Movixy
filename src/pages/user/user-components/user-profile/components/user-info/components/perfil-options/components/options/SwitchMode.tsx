import { useContext } from "react";
import { Contexts } from "../../../../../../../../../../contexts/ContextsProvider";
import { useTranslate } from "../../../../../../../../../../translations/Translations";

import DropdownButton from "../../../../../../../../../../components/ui/buttons/DropdownButton";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

export default function SwitchMode() {

    const contexts = useContext(Contexts)

    const { mode, setMode } = contexts!

    const { line } = useTranslate()

    const lightMode = mode == 'light'

    const Icon = lightMode ? FaRegSun : FaRegMoon

    return (
        <DropdownButton label={lightMode ? 'ariaSwitchToDark' : 'ariaSwitchToLight'} onClick={() => setMode(lightMode ? 'dark' : 'light')}>
            {
                line(lightMode ? 'lightMode' : 'darkMode')
            }
            <Icon />
        </DropdownButton>
    )
}