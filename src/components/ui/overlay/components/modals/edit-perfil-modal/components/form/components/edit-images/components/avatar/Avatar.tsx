import { useImageAlt } from "../../../../../../../../../../../../hooks/useImageAlt"
import { useImageFallback } from "../../../../../../../../../../../../hooks/useImageFallback"
import { LuImageOff } from "react-icons/lu"
import ChangePhoto from "./components/ChangePhoto"

type AvatarProps = {
    name: string
    avatarSrc: string | null
    onChangePhoto: () => void
}

export default function Avatar({ name, avatarSrc, onChangePhoto }: AvatarProps) {

    const { getImageAlt } = useImageAlt()
    const { src, onError } = useImageFallback(avatarSrc)

    return (
        <div className="h-7/10 aspect-square flex relative">
            <div className="size-full flex items-center justify-center overflow-hidden border rounded-full border-default">
                {
                    src ?
                        <img src={src} alt={getImageAlt(name, 'avatar')} decoding="async" draggable={false} referrerPolicy="no-referrer" onError={onError} className="size-full object-cover" />
                        :
                        <LuImageOff />
                }
            </div>
            <ChangePhoto changePhoto={onChangePhoto} />
        </div>
    )
}