import { useTranslate } from "../../../../../../../../../../../translations/Translations";
import { useImageFallback } from "../../../../../../../../../../../hooks/useImageFallback";
import { LuImageOff } from "react-icons/lu";

export default function Banner({ bannerSrc }: { bannerSrc: string | null }) {

    const { line } = useTranslate()

    const { src, onError } = useImageFallback(bannerSrc)

    return (
        <div className="size-full flex items-center justify-center">
            {
                src ?
                    <img src={src} alt={line('profileBanner')} decoding="async" draggable={false} onError={onError} className="size-full object-cover" />
                    :
                    <LuImageOff className="size-2/9 text-default" />
            }
        </div>
    )
}