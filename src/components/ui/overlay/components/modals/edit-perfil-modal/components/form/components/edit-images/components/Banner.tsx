import { LuImageOff } from "react-icons/lu";

export default function Banner({ bannerSrc }: { bannerSrc: string | null }) {
    return (
        <div className="size-full flex items-center justify-center">
            {
                bannerSrc ?
                    <img src={bannerSrc} alt="" className="size-full object-cover" />
                    :
                    <LuImageOff className="size-2/9 text-default"/>
            }
        </div>
    )
}