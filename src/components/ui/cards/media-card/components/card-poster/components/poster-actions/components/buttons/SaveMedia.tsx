import { useEffect, useState } from "react";
import { useTranslate } from "../../../../../../../../../../translations/Translations";
import { isItemSaved } from "../../../../../../../../../../services/lists-services/listsServices";
import type { Media, PersonCredit, SaveTarget } from "../../../../../../../../../../types/tmdb";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import useDrawer from "../../../../../../../../../../hooks/ui/useDrawer";
import useRequireLogin from "../../../../../../../../../../hooks/auth/useRequireLogin";
import SaveDrawer from "../../../../../../../../overlay/components/drawers/save-drawer/SaveDrawer";

export default function SaveMedia({ media }: { media: Media | PersonCredit }) {

    const { openDrawer } = useDrawer()

    const { line } = useTranslate()

    const { requireLogin } = useRequireLogin()

    const [saved, setSaved] = useState(false)

    const Icon = saved ? FaBookmark : FaRegBookmark

    const handleOpen = () => {
        if (!requireLogin('save')) return
        const item: SaveTarget = {
            id: media.id,
            type: media.media_type === "movie" || media.media_type === "tv" ? media.media_type : undefined
        }
        openDrawer(<SaveDrawer item={item} onSavedChange={setSaved} />)
    }

    useEffect(() => {
        if (media.media_type !== "movie" && media.media_type !== "tv") return
        isItemSaved(media.id, media.media_type).then(setSaved).catch(console.error)
    }, [media.id, media.media_type])

    return (
        <button className="flex size-8 sm:size-9 md:size-10 lg:size-6 xl:size-7 2xl:size-8 items-center justify-center rounded-full group/save cursor-pointer badge-poster" aria-label={line('ariaSave')} onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            handleOpen()
        }}>
            {
                <Icon className={`${saved ? 'fill-orange-400' : 'fill-zinc-300 group-hover/save:fill-zinc-200'} size-1/2 transition-all duration-300 ease-in-out`} />
            }
        </button>
    )
}