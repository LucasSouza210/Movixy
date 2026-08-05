import EditProfileButton from "./components/EditProfileButton";
import UserBio from "./components/UserBio";
import UserIdentity from "./components/UserIdentity";
import UserInfoAvatar from "./components/UserInfoAvatar";
import UserJoinDate from "./components/UserJoinDate";

export default function UserInfo() {
    return (
        <div className="w-full flex flex-col gap-6 px-8 relative">
            <UserInfoAvatar path={null} name={'John Doe'} />
            <div className="flex flex-col gap-4 pt-20 pb-10 border-b border-default">
                <EditProfileButton />
                <UserIdentity name={'John Doe'} userName={'john.doe'} />
                <UserBio />
                <UserJoinDate date={new Date()} />
            </div>
        </div>
    )
}