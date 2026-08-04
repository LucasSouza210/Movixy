import EditProfileButton from "./components/EditProfileButton";
import UserBio from "./components/UserBio";
import UserIdentity from "./components/UserIdentity";
import UserInfoAvatar from "./components/UserInfoAvatar";

export default function UserInfo() {
    return (
        <div className="w-full flex flex-col gap-6 px-8 border-x border-b border-default rounded-b-4xl relative bg-white/60 dark:bg-black/20">
            <UserInfoAvatar path={null} name={'John Doe'} />
            <div className="flex flex-col gap-4 py-16">
                <EditProfileButton />
                <UserIdentity name={'John Doe'} userName={'john.doe'} />
                <UserBio />
            </div>
        </div>
    )
}