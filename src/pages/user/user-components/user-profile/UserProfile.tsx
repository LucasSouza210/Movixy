import PerfilBanner from "./components/perfil-banner/PerfilBanner";
import UserInfo from "./components/user-info/UserInfo";

export default function UserProfile() {
    return (
        <div className="w-full flex flex-col sm:border-b border-default">
            <PerfilBanner />
            <UserInfo />
        </div>
    )
}