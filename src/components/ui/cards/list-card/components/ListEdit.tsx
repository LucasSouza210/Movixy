import { useTranslate } from "../../../../../translations/Translations";
import type { UserList } from "../../../../../types/tmdb";
import { MdModeEditOutline } from "react-icons/md";
import useOverlay from "../../../../../hooks/useOverlay";
import NewListModal from "../../../overlay/components/modals/new-list-modal/NewListModal";

export default function ListEdit({ list }: { list: UserList }) {

    const { openOverlay } = useOverlay()

    const { line } = useTranslate()

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        openOverlay(<NewListModal list={list} />, { center: true })
    }

    return (
        <button type="button" data-nested-action className="size-8 sm:size-9 md:size-10 lg:size-7 xl:size-8 2xl:size-9 flex items-center justify-center shrink-0 group border rounded-full action-elevated border-action" aria-label={line('ariaEditList')} onClick={handleClick}>
            <MdModeEditOutline className="size-1/2 text-action" />
        </button>
    )
}