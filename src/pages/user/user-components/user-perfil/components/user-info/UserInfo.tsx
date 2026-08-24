import { useUserInfo } from "../../../../../../hooks/useUserInfo";
import PerfilOptions from "./components/PerfilOptions";
import UserBio from "./components/UserBio";
import UserIdentity from "./components/UserIdentity";
import UserInfoAvatar from "./components/UserInfoAvatar";
import UserJoinDate from "./components/UserJoinDate";

export default function UserInfo() {

    const profile = useUserInfo()

    return (
        <div className="w-full flex flex-col relative">
            <UserInfoAvatar path={null} />
            <div className="flex flex-col gap-4 sm:gap-4.5 md:gap-5 lg:gap-4 xl:gap-4.5 2xl:gap-5 pt-20 sm:pt-22 md:pt-24 lg:pt-17 xl:pt-19.5 2xl:pt-22 pb-6 sm:pb-7 md:pb-8 lg:pb-7 xl:pb-8 2xl:pb-9 border-b border-default">
                <PerfilOptions />
                <UserIdentity name={profile.name} userName={profile.email} />
                <UserBio bio={null} />
                <UserJoinDate date={profile.createdAt} />
            </div>
        </div>
    )
}