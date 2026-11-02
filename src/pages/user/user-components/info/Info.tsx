import { useUserInfo } from "../../../../hooks/data/useUserInfo";
import Options from "./components/options/Options";
import Bio from "./components/Bio";
import Identity from "./components/identity/Identity";
import Avatar from "./components/Avatar";
import JoinDate from "./components/JoinDate";

export default function User() {

    const profile = useUserInfo()

    return (
        <div className="w-full flex flex-col relative">
            <Avatar path={profile.avatarUrl} name={profile.name} loading={profile.loading} />
            <Options />
            <div className="flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-4.5 2xl:gap-4 pt-19 sm:pt-20.5 md:pt-22 lg:pt-18 xl:pt-19.5 2xl:pt-21 pb-5 sm:pb-5.5 md:pb-6 lg:pb-5 xl:pb-5.5 2xl:pb-6 border-b border-default">
                <Identity name={profile.name} userName={profile.username} loading={profile.loading} />
                <Bio bio={profile.bio} loading={profile.loading} />
                <JoinDate date={profile.createdAt} loading={profile.loading} />
            </div>
        </div>
    )
}