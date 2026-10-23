import { useTranslate } from "../../../../../../../translations/Translations";
import type { SetStateAction } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function ShowPassword({ show, toggle }: { show: boolean | null, toggle: React.Dispatch<SetStateAction<boolean | null>> }) {

    const { line } = useTranslate()

    const Icon = show ? FaEye : FaEyeSlash

    return (
        <button className="h-full aspect-square flex items-center justify-center group" type="button" aria-label={line(show ? 'ariaHidePassword' : 'ariaShowPassword')} onClick={() => toggle(prev => !prev)}>
            <Icon className="size-2/5 transition-all duration-300 ease-in-out cursor-pointer fill-zinc-400 group-active:fill-zinc-500 dark:group-active:fill-zinc-300" />
        </button>
    )
}