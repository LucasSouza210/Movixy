import UserListsTitle from "./components/UserListsTitle";
import TitleLineActions from "./components/user-lists-actions/UserListsActions";

export default function UserListsHeader() {
    return (
        <div className="w-full flex items-center justify-between">
            <UserListsTitle />
            <TitleLineActions />
        </div>
    )
}