import { useTranslate } from "../../../../../../../translations/Translations";
import { FaLock, FaPlus } from "react-icons/fa6";
import useOverlay from "../../../../../../../hooks/ui/useOverlay";
import useRequireLogin from "../../../../../../../hooks/auth/useRequireLogin";
import useListLimits from "../../../../../../../hooks/data/useListsLimits";
import NewListModal from "../../../../../../../components/ui/overlay/components/modals/new-list-modal/NewListModal";

export default function NewList() {

    const { openOverlay } = useOverlay()

    const { line } = useTranslate()

    const { requireLogin } = useRequireLogin()

    const { listLimitReached } = useListLimits()

    const Icon = listLimitReached ? FaLock : FaPlus

    const handleOpen = () => {
        if (!requireLogin('save')) return
        openOverlay(<NewListModal />, { center: true })
    }

    return (
        <button disabled={listLimitReached} className={`size-8 sm:size-9 md:size-10 lg:size-7 xl:size-8 2xl:size-9 flex items-center justify-center rounded-full ${listLimitReached ? 'cursor-not-allowed bg-orange-500' : 'group action-brand'}`} aria-label={line('ariaNewList')} onClick={() => handleOpen()}>
            <Icon className={`${listLimitReached ? 'size-45/100 fill-zinc-100' : 'size-1/2 fill-zinc-100 group-hover:fill-white'}`} />
        </button>
    )
}