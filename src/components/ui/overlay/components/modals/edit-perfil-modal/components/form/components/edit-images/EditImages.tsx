import { useEffect, useRef, useState } from "react"
import type { ChangeEvent } from "react"
import { profileImageMaxBytes, profileImageTypes, type ImageChange } from "../../../../../../../../../../services/profile-services/profileServices"
import Banner from "./components/Banner"
import Avatar from "./components/avatar/Avatar"
import Actions from "./components/actions/Actions"

type EditImagesProps = {
    name: string
    avatarUrl: string | null
    bannerUrl: string | null
    avatar: ImageChange
    banner: ImageChange
    onAvatarChange: (change: ImageChange) => void
    onBannerChange: (change: ImageChange) => void
}

function useImageSrc(change: ImageChange, currentUrl: string | null) {
    const [preview, setPreview] = useState<string | null>(null)

    useEffect(() => {
        if (!(change instanceof File)) {
            setPreview(null)
            return
        }

        const url = URL.createObjectURL(change)
        setPreview(url)

        return () => URL.revokeObjectURL(url)
    }, [change])

    if (change === null) return null
    return change instanceof File ? preview : currentUrl
}

export default function EditImages({ name, avatarUrl, bannerUrl, avatar, banner, onAvatarChange, onBannerChange }: EditImagesProps) {

    const avatarInput = useRef<HTMLInputElement>(null)
    const bannerInput = useRef<HTMLInputElement>(null)

    const avatarSrc = useImageSrc(avatar, avatarUrl)
    const bannerSrc = useImageSrc(banner, bannerUrl)

    function handlePick(event: ChangeEvent<HTMLInputElement>, onChange: (change: ImageChange) => void) {
        const file = event.target.files?.[0]
        event.target.value = ""

        if (!file) return
        if (!profileImageTypes.includes(file.type)) return
        if (file.size > profileImageMaxBytes) return

        onChange(file)
    }

    return (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl sm:rounded-[18px] md:rounded-[20px] lg:rounded-xl xl:rounded-[14px] 2xl:rounded-2xl border border-default bg-elevated">
            <Banner bannerSrc={bannerSrc} />
            <div className="inset-0 flex items-end justify-between absolute z-10 p-5 sm:p-5.5 md:p-6 lg:p-4 xl:p-4.5 2xl:p-5">
                <Avatar name={name} avatarSrc={avatarSrc} onChangePhoto={() => avatarInput.current?.click()} />
                <Actions hasBanner={!!bannerSrc} onChangeBanner={() => bannerInput.current?.click()} onRemoveBanner={() => onBannerChange(null)} />
            </div>
            <input ref={avatarInput} type="file" accept={profileImageTypes.join(",")} className="hidden" onChange={(event) => handlePick(event, onAvatarChange)} />
            <input ref={bannerInput} type="file" accept={profileImageTypes.join(",")} className="hidden" onChange={(event) => handlePick(event, onBannerChange)} />
        </div>
    )
}