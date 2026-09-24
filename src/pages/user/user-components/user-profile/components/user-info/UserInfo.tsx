import { useUserInfo } from "../../../../../../hooks/useUserInfo";
import PerfilOptions from "./components/PerfilOptions";
import Bio from "./components/bio/Bio";
import UserIdentity from "./components/user-identity/UserIdentity";
import Avatar from "./components/avatar/Avatar";
import UserJoinDate from "./components/UserJoinDate";

export default function UserInfo() {

    const profile = useUserInfo()

    return (
        <div className="w-full flex flex-col relative">
            <Avatar path={null} loading={profile.loading} />
            <div className="flex flex-col gap-4 sm:gap-4.5 md:gap-5 lg:gap-4 xl:gap-4.5 2xl:gap-5 pt-19 sm:pt-21 md:pt-23 lg:pt-17 xl:pt-9 2xl:pt-21 pb-6 sm:pb-7 md:pb-8 lg:pb-6 xl:pb-7 2xl:pb-8 border-b border-default">
                <PerfilOptions />
                <UserIdentity name={profile.name} userName={profile.username} loading={profile.loading} />
                <Bio bio={profile.bio} loading={profile.loading} />
                <UserJoinDate date={profile.createdAt} loading={profile.loading} />
            </div>
        </div>
    )
}