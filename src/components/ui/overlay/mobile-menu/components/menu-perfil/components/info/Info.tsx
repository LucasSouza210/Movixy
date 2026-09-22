import { useUserInfo } from "../../../../../../../../hooks/useUserInfo";
import Name from "./components/Name";
import Avatar from "./components/Avatar";

export default function Info() {

    const profile = useUserInfo()

    return (
        <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
            <Avatar url={profile.avatarUrl} />
            <Name name={profile.name} />
        </div>
    )
}