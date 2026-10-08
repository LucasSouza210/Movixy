import { useEffect, useState } from "react"

import { FaHeart, FaRegHeart } from "react-icons/fa"

import { isPersonLiked, likePerson, unlikePerson } from "../../../../../services/liked-services/likedServices"

export default function LikeButton({ personId }: { personId: number }) {

    const [liked, setLiked] = useState(false)

    const Icon = liked ? FaHeart : FaRegHeart

    const handleToggle = () => {
        if (liked) {
            unlikePerson(personId)
                .then(() => setLiked(false))
                .catch(console.error)

            return
        }

        likePerson(personId).then(() => setLiked(true)).catch(console.error)
    }

    useEffect(() => {
        isPersonLiked(personId)
            .then(setLiked)
            .catch(console.error)
    }, [personId])

    return (
        <button className={`size-8 sm:size-9 md:size-10 lg:size-7 xl:size-8 2xl:size-9 flex items-center justify-center border rounded-full absolute bottom-0 right-0 backdrop-blur-[2px] group transition-all duration-300 ease-in-out bg-zinc-400/50 dark:bg-zinc-800/50 border-zinc-400/50 dark:border-zinc-700/50 ${personId ? 'cursor-pointer hover:bg-zinc-400/60 dark:hover:bg-zinc-800/60 hover:border-zinc-500/50 dark:hover:border-zinc-600/50' : 'cursor-not-allowed'}`} onClick={e => {
            e.stopPropagation()
            handleToggle()
        }}>
            <Icon className={`size-1/2 ${liked ? "fill-orange-500" : `fill-zinc-200 dark:fill-zinc-400 ${personId && 'group-hover:fill-orange-500'}`}`} />
        </button>
    )
}