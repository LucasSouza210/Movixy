import { useContext, useEffect, useState } from "react"
import { FaCheck, FaRegTrashAlt } from "react-icons/fa";
import { deleteList } from "../../../../../../../services/lists-services/listsServices";
import { Contexts } from "../../../../../../../contexts/ContextsProvider";

export default function Exclude({ listId }: { listId: string }) {

    const { removeUserList } = useContext(Contexts)!

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
        <button className="size-8 sm:size-9 md:size-10 lg:size-8 xl:size-9 2xl:size-10 flex items-center justify-center border rounded-full action-elevated border-action text-action" onClick={handleClick}>
            <Icon className="size-5/11" />
        </button>
    )
}