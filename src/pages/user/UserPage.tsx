import PageContainer from "../../components/ui/PageContainer";
import UserProfile from "./user-components/user-perfil/UserProfile";

export default function UserPage() {
    return (
        <PageContainer removePadding>
            <div className="w-full flex flex-col items-center gap-8 sm:gap-9 md:gap-10 lg:gap-8 xl:gap-10 2xl:gap-12">
                <UserProfile />
            </div>
        </PageContainer>
    )
}