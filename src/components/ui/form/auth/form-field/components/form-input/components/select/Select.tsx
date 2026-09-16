import type { SelectOption } from "../../../../FormField"
import useClickOutside from "../../../../../../../../../hooks/useClickOutside"
import Dropdown from "./components/dropdown/Dropdown"
import SelectField from "./components/SelectField"
import { useState } from "react"

export default function Select({ options }: { options: SelectOption[] }) {

    const { ref, open, toggle, close } = useClickOutside()

    const [selected, setSelected] = useState<SelectOption>(options[0])

    return (
        <div className="w-full flex flex-col items-center relative" ref={ref}>
            <SelectField option={selected} open={open} onClick={toggle} />
            <Dropdown options={options} selected={selected} setSelected={setSelected} open={open} close={close} />
        </div>
    )
}