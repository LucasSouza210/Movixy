import { useContext } from "react";
import { Contexts } from "../../../../contexts/ContextsProvider";
import ContentRow from "../../../../components/ui/content-row/ContentRow";
import UserListsHeader from "./components/user-lists-header/UserListsHeader";

const itemsPerView = [1, 1, 1, 2]

export default function UserLists() {

    const contexts = useContext(Contexts)

    const { userLists } = contexts!

    return (
        <ContentRow className="w-full flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-4 xl:gap-5 2xl:gap-6" content={userLists} option="list" itemsPerView={itemsPerView}>
            <UserListsHeader />
        </ContentRow>
    )
}