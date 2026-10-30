import { useContext, type ComponentType, type SVGProps } from "react"
import { Contexts } from "../../../../../contexts/ContextsProvider"
import { FaCheck } from "react-icons/fa"
import type { Lang } from "../../../../../types/tmdb"

interface DropdownButtonProps {
    option: { lang: Lang, flag: ComponentType<SVGProps<SVGSVGElement>> }
    label: string
    Flag: ComponentType<{ className?: string }>
    close: () => void
}

export default function DropdownButton({ option, label, Flag, close }: DropdownButtonProps) {

    const { lang, setLang } = useContext(Contexts)!

    const handleClose = () => {
        setTimeout(() => {
            setLang(option.lang)
            close()
        }, 50)
    }

    return (
        <button className={`h-8 sm:h-9 md:h-10 lg:h-8 xl:h-8.5 2xl:h-9 flex items-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 px-3 sm:px-3.5 md:px-4 lg:px-3 2xl:px-3.5 border rounded-md sm:rounded-[7px] md:rounded-lg lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg transition-all duration-300 ease-in-out cursor-pointer ${option.lang == lang ? 'bg-elevated border-default text-orange-500' : 'border-transparent text-default hover:bg-elevated hover:border-default hover:text-orange-500'}`} aria-label={label} onClick={() => { handleClose() }}>
            <Flag className="h-2 sm:h-2.25 md:h-2.5 lg:h-1.5 xl:h-1.75 2xl:h-2 w-auto" />
            <p className="text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-[11px] 2xl:text-xs font-semibold tracking-wide md:tracking-wider lg:tracking-wide 2xl:tracking-wider uppercase">{option.lang}</p>
            {
                option.lang == lang &&
                <FaCheck className="size-2.5 sm:size-2.75 md:size-3 lg:size-2 xl:size-2.25 2xl:size-2.5 text-orange-500" />
            }
        </button>
    )
}