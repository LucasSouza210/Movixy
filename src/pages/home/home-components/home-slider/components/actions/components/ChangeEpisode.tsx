import { useTranslate } from "../../../../../../../translations/Translations"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

export default function ChangeEpisode({ type, action }: { type: 'next' | 'previous', action: () => void }) {

    const { line } = useTranslate()

    const isNext = type == 'next'

    const Icon = isNext ? FaAngleRight : FaAngleLeft

    return (
        <button aria-label={line(isNext ? 'ariaNextSlide' : 'ariaPreviousSlide')} onClick={() => action()}>
            <Icon className="size-6 sm:size-7 md:size-8 lg:size-5 xl:size-5.5 2xl:size-6 transition-all duration-300 ease-in-out cursor-pointer fill-zinc-300 hover:fill-zinc-100 active:fill-white" />
        </button>
    )
}