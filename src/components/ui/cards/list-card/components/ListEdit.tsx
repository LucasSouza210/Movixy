import type { UserList } from "../../../../../types/tmdb";
import { MdModeEditOutline } from "react-icons/md";
import useOverlay from "../../../../../hooks/useOverlay";
import NewListModal from "../../../overlay/components/modals/new-list-modal/NewListModal";

export default function ListEdit({ list }: { list: UserList }) {

    const { openOverlay } = useOverlay()

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        openOverlay(<NewListModal list={list} />, { center: true })
        console.log("editing:", list)
    }

    return (
        <button type="button" data-nested-action className="size-7 sm:size-8 md:size-9 lg:size-6 xl:size-7 2xl:size-8 flex items-center justify-center shrink-0 group border rounded-full action-elevated border-action" onClick={handleClick}>
            <MdModeEditOutline className="size-1/2 text-action" />
        </button>
    )
}