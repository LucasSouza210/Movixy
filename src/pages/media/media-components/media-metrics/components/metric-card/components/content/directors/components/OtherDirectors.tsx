import type { Director } from "../../../../MetricCard";
import useOverlay from "../../../../../../../../../../hooks/useOverlay";
import DirectorsModal from "../../../../../../../../../../components/ui/overlay/components/modals/directors-modal/DirectorsModal";

export default function OtherDirectors({ directors }: { directors: Director[] | undefined }) {

    if (!directors) return

    const { openOverlay } = useOverlay()

    const handleOpen = () => {
        openOverlay(<DirectorsModal directors={directors} />, { center: true })
    }

    return (
        <button className="shrink-0 font-semibold text-lg sm:text-xl md:text-[22px] lg:text-sm xl:text-base 2xl:text-lg tracking-wider leading-7.5 sm:leading-8.25 md:leading-9 lg:leading-6 xl:leading-6.75 2xl:leading-7.5 text-action" onClick={() => handleOpen()}>
            {
                `, +${directors.length - 1}`
            }
        </button>
    )
}