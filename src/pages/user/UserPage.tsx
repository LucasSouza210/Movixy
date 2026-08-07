import PageContainer from "../../components/ui/PageContainer";
import UserLists from "./user-components/user-lists/UserLists";
import UserProfile from "./user-components/user-perfil/UserProfile";

export default function UserPage() {
    return (
        <PageContainer removePadding>
            <div className="w-full flex flex-col items-center gap-8 sm:gap-9 md:gap-10 lg:gap-8 xl:gap-10 2xl:gap-12">
                <UserProfile />
                <div className="w-full flex flex-col gap-8 sm:gap-9 md:gap-10 lg:gap-8 xl:gap-10 2xl:gap-12 px-8 sm:px-0 pb-8 sm:pb-10 md:pb-12 lg:pb-8 xl:pb-9 2xl:pb-10">
                    <UserLists />
                </div>
            </div>
        </PageContainer>
    )
}