import PageContainer from "../../components/ui/PageContainer";
import UserLists from "./user-components/user-lists/UserLists";
import PerfilBanner from "./user-components/user-perfil/components/PerfilBanner";
import UserInfo from "./user-components/user-perfil/components/user-info/UserInfo";
import UserProfile from "./user-components/user-perfil/UserProfile";

export default function UserPage() {
    return (
        <PageContainer customLimit removePadding>
            <div className="w-full flex flex-col items-center">
                {/* <UserProfile /> */}
                <PerfilBanner />
                <div className="w-full sm:max-w-96 md:max-w-md lg:max-w-156 xl:max-w-3xl 2xl:max-w-4xl flex flex-col gap-8 sm:gap-8 md:gap-10 lg:gap-7 xl:gap-8 2xl:gap-9 px-8 sm:px-0 pb-8 sm:pb-10 md:pb-12 lg:pb-8 xl:pb-9 2xl:pb-10">
                    <UserInfo />
                    <UserLists />
                </div>
                {/* <div className="w-full flex flex-col gap-8 sm:gap-9 md:gap-10 lg:gap-8 xl:gap-10 2xl:gap-12 px-8 sm:px-0 pb-8 sm:pb-10 md:pb-12 lg:pb-8 xl:pb-9 2xl:pb-10">
                    
                </div> */}
            </div>
        </PageContainer>
    )
}