import PerfilBackground from "./components/PerfilBackground";
import UserInfo from "./components/user-info/UserInfo";

export default function UserProfile() {
    return (
        <div className="w-full flex flex-col">
            <PerfilBackground />
            <div className="flex flex-col">
                <UserInfo />
            </div>
        </div>
    )
}