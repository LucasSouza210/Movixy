import { useState } from "react"
import { useParams } from "react-router-dom";
import { removeItemFromList } from "../../../../../../../../../../services/lists-services/listsServices";
import type { ListItemMediaType } from "../../../../../../../../../../types/tmdb";
import { FaRegTrashAlt, FaCheck } from "react-icons/fa";

export default function Exclude({ itemId, type }: { itemId: number, type: string }) {

    const { id } = useParams()

    const [clicked, setClicked] = useState(false)

    const Icon = clicked ? FaCheck : FaRegTrashAlt

    const handleClick = () => {
        !clicked ? setClicked(true) : removeItemFromList(id ?? '', itemId, type as ListItemMediaType)
    }

    return (
        <button className="flex size-8 sm:size-9 md:size-10 lg:size-6 xl:size-7 2xl:size-8 items-center justify-center rounded-full group/exclude cursor-pointer badge-poster" onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            handleClick()
        }}>
            <Icon className="size-1/2 transition-all duration-300 ease-in-out fill-zinc-300 group-hover/exclude:fill-zinc-200" />
        </button>
    )
}