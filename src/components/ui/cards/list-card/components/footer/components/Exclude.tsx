import { useContext, useEffect, useState } from "react"
import { Contexts } from "../../../../../../../contexts/ContextsProvider";
import { useTranslate } from "../../../../../../../translations/Translations";
import { deleteList } from "../../../../../../../services/lists-services/listsServices";
import { FaCheck, FaRegTrashAlt } from "react-icons/fa";

export default function Exclude({ listId, title, fixed }: { listId: string, title: string, fixed: boolean }) {

    const { removeUserList } = useContext(Contexts)!

    const { line } = useTranslate()

    const [confirming, setConfirming] = useState(false)
    const [deleting, setDeleting] = useState(false)

    const Icon = confirming ? FaCheck : FaRegTrashAlt

    const handleClick = async (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()

        if (deleting) return
        if (!confirming) return setConfirming(true)

        setDeleting(true)
        try {
            await deleteList(listId)
            removeUserList(listId)
        } catch (error) {
            console.error("Failed to delete list:", error)
            setDeleting(false)
            setConfirming(false)
        }
    }

    useEffect(() => {
        if (!confirming) return
        const timer = setTimeout(() => setConfirming(false), 3000)
        return () => clearTimeout(timer)
    }, [confirming])

    return (
        <button className="size-8 sm:size-9.5 md:size-11 lg:size-7 xl:size-8 2xl:size-9 flex items-center justify-center border rounded-full action-elevated border-action text-action" aria-label={`${line('ariaDeleteListOf')} ${fixed ? line(title) : title}`} onClick={handleClick}>
            <Icon className="size-5/11" />
        </button>
    )
}