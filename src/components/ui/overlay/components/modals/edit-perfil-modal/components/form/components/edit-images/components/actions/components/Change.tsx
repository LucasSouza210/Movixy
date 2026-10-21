import { LuCamera } from "react-icons/lu";
import BannerButton from "../../../../../../../../../../../buttons/BannerButton";

export default function Change({ hasBanner, change }: { hasBanner: boolean, change: () => void }) {
    return (
        <BannerButton hasBanner={hasBanner} icon={LuCamera} onClick={change} />
    )
}