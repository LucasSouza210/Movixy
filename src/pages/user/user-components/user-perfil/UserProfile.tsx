import PerfilBanner from "./components/PerfilBanner";
import UserInfo from "./components/user-info/UserInfo";

export default function UserProfile() {
    return (
        <div className="w-full flex flex-col">
            <PerfilBanner />
                <UserInfo />
        </div>
    )
}