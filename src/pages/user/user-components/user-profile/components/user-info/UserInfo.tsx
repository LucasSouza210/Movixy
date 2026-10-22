import { useUserInfo } from "../../../../../../hooks/useUserInfo";
import PerfilOptions from "./components/perfil-options/PerfilOptions";
import Bio from "./components/bio/Bio";
import UserIdentity from "./components/user-identity/UserIdentity";
import Avatar from "./components/avatar/Avatar";
import UserJoinDate from "./components/UserJoinDate";

export default function UserInfo() {

    const profile = useUserInfo()

    return (
        <div className="w-full flex flex-col relative">
            <Avatar path={profile.avatarUrl} name={profile.name} loading={profile.loading} />
            <PerfilOptions />
            <div className="flex flex-col gap-4 sm:gap-4.5 md:gap-5 lg:gap-4 xl:gap-4.5 2xl:gap-5 pt-19 sm:pt-20.5 md:pt-22 lg:pt-18 xl:pt-19.5 2xl:pt-21 pb-6 sm:pb-7 md:pb-8 lg:pb-6 xl:pb-7 2xl:pb-8 border-b border-default">
                <UserIdentity name={profile.name} userName={profile.username} loading={profile.loading} />
                <Bio bio={profile.bio} loading={profile.loading} />
                <UserJoinDate date={profile.createdAt} loading={profile.loading} />
            </div>
        </div>
    )
}