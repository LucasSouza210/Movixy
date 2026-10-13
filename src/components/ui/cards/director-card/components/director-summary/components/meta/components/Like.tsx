import { useEffect, useState } from "react"
import { isPersonLiked, likePerson, unlikePerson } from "../../../../../../../../../services/liked-services/likedServices"
import { FaHeart, FaRegHeart } from "react-icons/fa"

export default function Like({ directorId }: { directorId: number }) {

    const [liked, setLiked] = useState(false)

    const Icon = liked ? FaHeart : FaRegHeart

    const handleToggle = () => {
        if (liked) {
            unlikePerson(directorId)
                .then(() => setLiked(false))
                .catch(console.error)

            return
        }

        likePerson(directorId).then(() => setLiked(true)).catch(console.error)
    }

    useEffect(() => {
        isPersonLiked(directorId)
            .then(setLiked)
            .catch(console.error)
    }, [directorId])

    return (
        <button className={`size-7 sm:size-8.25 md:size-9.5 lg:size-6 xl:size-7.25 2xl:size-8.5 flex items-center justify-center border rounded-full group ${directorId ? 'action-elevated border-action' : 'cursor-not-allowed bg-elevated border-default'}`} onClick={e => {
            e.stopPropagation()
            handleToggle()
        }}>
            <Icon className={`size-1/2 ${liked ? "fill-orange-500" : `fill-zinc-400 ${directorId && 'group-hover:fill-orange-500'}`}`} />
        </button>
    )
}