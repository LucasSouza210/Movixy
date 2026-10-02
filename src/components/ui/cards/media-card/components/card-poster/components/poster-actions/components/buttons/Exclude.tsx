import { useParams } from "react-router-dom"

import { removeItemFromList } from "../../../../../../../../../../services/lists-services/listsServices"
import type { ListItemMediaType } from "../../../../../../../../../../types/tmdb"

import { FaRegTrashAlt, FaCheck } from "react-icons/fa"

import useClickOutside from "../../../../../../../../../../hooks/useClickOutside"

export default function Exclude({ itemId, type }: { itemId: number, type: string }) {

    const { id } = useParams()

    const { ref, open: clicked, toggle } = useClickOutside<HTMLButtonElement>()

    const Icon = clicked ? FaCheck : FaRegTrashAlt

    const handleClick = () => {
        if (clicked) {
            toggle("close")
            removeItemFromList(id ?? "", itemId, type as ListItemMediaType)
        }
        else {
            toggle("open")
        }
    }

    return (
        <button ref={ref} className="flex size-8 sm:size-9 md:size-10 lg:size-6 xl:size-7 2xl:size-8 items-center justify-center rounded-full group/exclude cursor-pointer badge-poster" onClick={e => {
            e.preventDefault()
            e.stopPropagation()
            handleClick()
        }}>
            <Icon className="size-1/2 transition-all duration-300 ease-in-out fill-zinc-300 group-hover/exclude:fill-zinc-200" />
        </button>
    )
}