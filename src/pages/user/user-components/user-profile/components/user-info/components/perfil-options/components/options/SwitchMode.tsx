import { useContext } from "react";
import { Contexts } from "../../../../../../../../../../contexts/ContextsProvider";
import { useTranslate } from "../../../../../../../../../../translations/Translations";

import DropdownButton from "../../../../../../../../../../components/ui/buttons/DropdownButton";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

export default function SwitchMode() {

    const contexts = useContext(Contexts)

    const { mode, setMode } = contexts!

    const { line } = useTranslate()


    const Icon = mode == 'light' ? FaRegSun : FaRegMoon

    return (
        <DropdownButton onClick={() => setMode(mode == 'light' ? 'dark' : 'light')}>
            {
                line(mode == 'light' ? 'lightMode' : 'darkMode')
            }
            <Icon />
        </DropdownButton>
    )
}