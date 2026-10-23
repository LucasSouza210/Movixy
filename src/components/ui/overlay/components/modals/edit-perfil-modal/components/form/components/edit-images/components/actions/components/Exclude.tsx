import { LuTrash2 } from "react-icons/lu";
import BannerButton from "../../../../../../../../../../../buttons/BannerButton";

export default function Exclude({ exclude }: { exclude: () => void }) {
    return (
        <BannerButton hasBanner icon={LuTrash2} onClick={exclude} label="ariaRemoveBanner"/>
    )
}