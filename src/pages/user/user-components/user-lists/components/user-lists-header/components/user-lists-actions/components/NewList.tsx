import { FaPlus } from "react-icons/fa6";
import useOverlay from "../../../../../../../../../hooks/useOverlay";
import NewListModal from "../../../../../../../../../components/ui/overlay/components/modals/new-list-modal/NewListModal";

export default function NewList() {

    const { openOverlay } = useOverlay()

    const handleOpen = () => {
        openOverlay(<NewListModal />, { center: true })
    }

    return (
        <button className="size-8 sm:size-9 md:size-10 lg:size-7 xl:size-8 2xl:size-9 flex items-center justify-center rounded-full group action-brand" onClick={() => handleOpen()}>
            <FaPlus className="size-1/2 fill-zinc-200 group-hover:fill-white" />
        </button>
    )
}