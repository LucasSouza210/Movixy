import { useContext } from "react";
import { Contexts } from "../../../../contexts/ContextsProvider";
import ContentRow from "../../../../components/ui/content-row/ContentRow";
import UserListsHeader from "./components/lists-title-line/UserListsHeader";

const itemsPerView = [1, 1, 1, 2]

export default function UserLists() {

    const contexts = useContext(Contexts)

    const { userLists } = contexts!

    return (
        <ContentRow content={userLists} option="list" itemsPerView={itemsPerView}>
            <UserListsHeader />
        </ContentRow>
    )
}