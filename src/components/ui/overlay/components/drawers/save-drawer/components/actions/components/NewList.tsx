import { FaLock, FaPlus } from "react-icons/fa6"
import { useTranslate } from "../../../../../../../../../translations/Translations"
import useOverlay from "../../../../../../../../../hooks/ui/useOverlay"
import useListLimits from "../../../../../../../../../hooks/data/useListsLimits"
import NewListModal from "../../../../../../../../../components/ui/overlay/components/modals/new-list-modal/NewListModal"
import type { SaveTarget } from "../../../../../../../../../types/tmdb"

export default function NewList({ item, onSavedChange }: { item: SaveTarget, onSavedChange?: (saved: boolean) => void }) {

    const { openOverlay } = useOverlay()

    const { line } = useTranslate()

    const { listLimitReached } = useListLimits()

    const Icon = listLimitReached ? FaLock : FaPlus

    const handleOpen = () => {
        openOverlay(<NewListModal item={item} onSaved={() => onSavedChange?.(true)} />, { center: true })
    }

    return (
        <button type="button" className={`size-10 sm:size-11 md:size-12 lg:size-8 xl:size-9 2xl:size-10 flex items-center justify-center group rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg ${listLimitReached ? 'cursor-not-allowed bg-orange-500 text-zinc-100' : 'action-brand text-action-alternative'}`} disabled={listLimitReached} aria-label={line('ariaNewList')} onClick={handleOpen}>
            <Icon aria-hidden className="size-1/2" />
            {line(listLimitReached ? 'limitReached' : 'newListButton')}
        </button>
    )
}