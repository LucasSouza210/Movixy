import { useContext, type ComponentType, type SVGProps } from "react"
import { Contexts } from "../../../../../contexts/ContextsProvider"
import { FaCheck } from "react-icons/fa"

export type Lang = 'pt' | 'en' | 'es'

interface DropdownButtonProps {
    option: { lang: Lang, flag: ComponentType<SVGProps<SVGSVGElement>> },
    close: () => void,
    Flag: ComponentType<{ className?: string }>
}

export default function DropdownButton({ option, close, Flag }: DropdownButtonProps) {

    const contexts = useContext(Contexts)

    const { lang, setLang } = contexts!

    const handleClose = () => {
        setTimeout(() => {
            setLang(option.lang)
            close()
        }, 50)
    }

    return (
        <button className={`${option.lang == lang ? 'text-orange-600 dark:text-orange-500' : 'text-zinc-500 hover:text-orange-500 dark:text-zinc-400 dark:hover:text-orange-600'} flex items-center gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-2 xl:gap-2.25 2xl:gap-2.5 transition-all duration-300 ease-in-out cursor-pointer`} onClick={() => { handleClose() }}>
            <Flag className="h-2 sm:h-2.25 md:h-2.5 lg:h-2 xl:h-2.25 2xl:h-2.5 w-auto" />
            <p className="text-xs sm:text-[13px] md:text-sm lg:text-xs xl:text-[13px] 2xl:text-sm font-semibold tracking-wide md:tracking-wider lg:tracking-wide 2xl:tracking-wider leading-none uppercase">{option.lang}</p>
            {
                option.lang == lang &&
                <FaCheck className="size-2.5 sm:size-3 md:size-3.5 lg:size-2.5 xl:size-3 2xl:size-3.5 text-orange-500 dark:text-orange-600" />
            }
        </button>
    )
}