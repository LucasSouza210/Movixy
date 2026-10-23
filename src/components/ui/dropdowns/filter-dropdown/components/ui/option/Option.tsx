import type { IconType } from "react-icons";
import Checkbox from "./components/Checkbox";
import Label from "./components/Label";

export default function Option({ onClick, selected, icon, label, translate }: { onClick: () => void, selected: boolean, icon: IconType, label: string, translate?: boolean }) {
    return (
        <button className={`flex items-center cursor-pointer gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 ${selected ? 'text-orange-500' : 'text-action'}`} role="checkbox" aria-checked={selected} onClick={() => onClick()}>
            <Checkbox selected={selected} />
            <Label icon={icon} label={label} translate={translate} />
        </button>
    )
}