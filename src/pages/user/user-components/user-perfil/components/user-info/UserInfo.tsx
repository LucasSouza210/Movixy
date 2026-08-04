import UserIdentity from "./components/UserIdentity";
import UserInfoAvatar from "./components/UserInfoAvatar";

export default function UserInfo() {
    return (
        <div className="w-full flex items-center gap-6 p-6 rounded-3xl border border-default bg-white dark:bg-black/20">
            <UserInfoAvatar path={null} name={'John Doe'} />
            <UserIdentity name={'John Doe'} userName={'john.doe'}/>
        </div>
    )
}