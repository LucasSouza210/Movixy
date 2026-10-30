import { useTranslate } from "../../../translations/Translations"
import useOverlay from "../../../hooks/ui/useOverlay"

type GuestButtonProps = {
    label: string
    onClick: () => void
    variant: 'default' | 'ghost'
}

export default function GuestButton({ label, onClick, variant }: GuestButtonProps) {

    const { line } = useTranslate()

    const { closeOverlay } = useOverlay()

    const handleClick = () => {
        closeOverlay()
        onClick()
    }

    return (
        <button type="button" className={`w-full h-10 sm:h-11 md:h-12 lg:h-8 xl:h-9 2xl:h-10 flex items-center justify-center text-sm sm:text-[15px] md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg text-action ${variant == 'default' ? 'border action-elevated border-action' : 'action-ghost'}`} onClick={() => handleClick()}>
            {line(label)}
        </button>
    )
}