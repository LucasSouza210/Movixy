import { LuImageOff } from "react-icons/lu"
import ChangePhoto from "./components/ChangePhoto"

type AvatarProps = {
    name: string
    avatarSrc: string | null
    onChangePhoto: () => void
}

export default function Avatar({ name, avatarSrc, onChangePhoto }: AvatarProps) {
    return (
        <div className="h-7/10 aspect-square flex relative">
            <div className="size-full flex items-center justify-center overflow-hidden border rounded-full border-default">
                {
                    avatarSrc ?
                        <img src={avatarSrc} alt={`${name} avatar`} className="size-full object-cover" />
                        :
                        <LuImageOff />
                }
            </div>
            <ChangePhoto changePhoto={onChangePhoto} />
        </div>
    )
}