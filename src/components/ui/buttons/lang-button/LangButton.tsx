import { TbWorld } from "react-icons/tb";
import useClickOutside from "../../../../hooks/useClickOutside.ts";
import LangDropdown from "./components/LangDropdown.tsx";
import useLang from "../../../../hooks/useLang.ts";
import HeaderButton from "../HeaderButton.tsx";

export default function LangButton() {

    const lang = useLang()

    const { ref, open, toggle, close } = useClickOutside()

    return (
        <div ref={ref} className="flex flex-col items-center relative">
            <HeaderButton className="gap-1.25 sm:gap-1.5 md:gap-1.75 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 px-4 sm:px-5 md:px-6 lg:px-3 xl:px-3.5 2xl:px-4" label="ariaChangeLanguage" onClick={toggle}>
                <TbWorld className="size-3.5 sm:size-4 md:size-4.5 lg:size-3 xl:size-3.25 2xl:size-3.5" />
                {lang}
            </HeaderButton>
            <LangDropdown open={open} close={close} />
        </div>
    )
}