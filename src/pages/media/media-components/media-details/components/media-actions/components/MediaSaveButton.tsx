import { useEffect, useState } from "react";
import { useTranslate } from "../../../../../../../translations/Translations";
import type { Media, PersonCredit, SaveTarget } from "../../../../../../../types/tmdb";
import { isItemSaved } from "../../../../../../../services/lists-services/listsServices";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import useDrawer from "../../../../../../../hooks/useDrawer";
import SaveDrawer from "../../../../../../../components/ui/drawers/save-drawer/SaveDrawer";

export default function MediaSaveButton({ media, mediaType }: { media: Media | PersonCredit | null, mediaType?: string }) {

    const { line } = useTranslate()
    const { openDrawer } = useDrawer()

    const [saved, setSaved] = useState(false)

    const Icon = saved ? FaBookmark : FaRegBookmark

    const resolvedType = mediaType === "movie" || mediaType === "tv" ? mediaType : (media?.media_type === "movie" || media?.media_type === "tv" ? media.media_type : undefined)

    const handleOpen = () => {
        if (!media?.id) return

        const item: SaveTarget = {
            id: media.id,
            type: resolvedType
        }
        openDrawer(<SaveDrawer item={item} />)
    }

    useEffect(() => {
        if (!media?.id || !resolvedType) return

        isItemSaved(media.id, resolvedType)
            .then(setSaved)
            .catch(console.error)
    }, [media?.id, resolvedType])

    return (
        <button className="h-12 sm:h-13 md:h-14 lg:h-8 xl:h-10 2xl:h-12 aspect-2/1 flex items-center justify-center gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-1 xl:gap-1.5 2xl:gap-2 border rounded-[10px] sm:rounded-[11px] md:rounded-xl lg:rounded-md xl:rounded-lg 2xl:rounded-[10px] font-medium text-sm sm:text-[15px] md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm tracking-wider lg:tracking-wide leading-none action-default border-action text-action" onClick={handleOpen}>
            {line(saved ? 'savedMedia' : 'saveMedia')}
            <Icon className="size-2.5 sm:size-2.75 md:size-3 lg:size-1.5 xl:size-2 2xl:size-2.5 fill-zinc-500 dark:fill-zinc-300" />
        </button>
    )
}