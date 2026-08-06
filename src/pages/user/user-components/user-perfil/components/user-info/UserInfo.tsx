import EditProfileButton from "./components/EditProfileButton";
import UserBio from "./components/UserBio";
import UserIdentity from "./components/UserIdentity";
import UserInfoAvatar from "./components/UserInfoAvatar";
import UserJoinDate from "./components/UserJoinDate";

export default function UserInfo() {
    return (
        <div className="w-full flex flex-col gap-6 px-8 sm:px-9 md:px-10 lg:px-7 xl:px-8 2xl:px-9 relative">
            <UserInfoAvatar path={null} />
            <div className="flex flex-col gap-4 sm:gap-4.5 md:gap-5 lg:gap-3 xl:gap-3.5 2xl:gap-4 pt-20 sm:pt-22 md:pt-24 lg:pt-17 xl:pt-19.5 2xl:pt-22 pb-8 sm:pb-9 md:pb-10 lg:pb-7 xl:pb-8 2xl:pb-9 border-b sm:border-none border-default">
                <EditProfileButton />
                <UserIdentity name={'John Doe'} userName={'john.doe'} />
                <UserBio bio={null} />
                <UserJoinDate date={new Date()} />
            </div>
        </div>
    )
}