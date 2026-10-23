import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslate } from "../../../../../../translations/Translations";
import { isPersonLiked, likePerson, unlikePerson } from "../../../../../../services/liked-services/likedServices";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function LikeButton() {

    const { id } = useParams()

    const { line } = useTranslate()

    const personId = id ? Number(id) : undefined

    const [liked, setLiked] = useState(false)

    const Icon = liked ? FaHeart : FaRegHeart

    const handleToggle = () => {
        if (personId === undefined) return

        if (liked) {
            unlikePerson(personId)
                .then(() => setLiked(false))
                .catch(console.error)

            return
        }

        likePerson(personId)
            .then(() => setLiked(true))
            .catch(console.error)
    }

    useEffect(() => {

        if (personId === undefined) return
        isPersonLiked(personId).then(setLiked).catch(console.error)

    }, [personId])

    return (
        <button className={`size-8 sm:size-10 md:size-12 lg:size-8 xl:size-9 2xl:size-10 flex items-center justify-center group rounded-full border ${id ? 'action-default border-action' : 'cursor-not-allowed bg-default border-default'}`} aria-label={line('ariaLike')} onClick={() => handleToggle()}>
            <Icon className={`size-1/2 ${!liked ? `fill-zinc-400 ${id && 'group-hover:fill-orange-500'}` : 'fill-orange-500'}`} />
        </button>
    )
}