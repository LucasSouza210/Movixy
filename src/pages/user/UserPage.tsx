import PageContainer from "../../components/ui/PageContainer";
import PerfilBanner from "./user-components/user-profile/components/perfil-banner/PerfilBanner";
import UserInfo from "./user-components/user-profile/components/user-info/UserInfo";
import UserLists from "./user-components/user-lists/UserLists";

export default function UserPage() {
    return (
        <PageContainer customLimit removeXPadding removeYPadding>
            <div className="w-full flex flex-col items-center">
                <PerfilBanner />
                <div className="w-full sm:max-w-96 md:max-w-md lg:max-w-156 xl:max-w-3xl 2xl:max-w-4xl flex flex-col gap-7 sm:gap-8 md:gap-9 lg:gap-6 xl:gap-7 2xl:gap-8 px-8 sm:px-0 pb-8 sm:pb-10 md:pb-12 lg:pb-8 xl:pb-9 2xl:pb-10">
                    <UserInfo />
                    <UserLists />
                </div>
            </div>
        </PageContainer>
    )
}