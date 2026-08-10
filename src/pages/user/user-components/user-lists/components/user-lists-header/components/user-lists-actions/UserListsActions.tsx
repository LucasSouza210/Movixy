import UserListsLink from "./components/UserListsLink";
import UserListsEdit from "./components/UserListsEdit";

export default function TitleLineActions() {
    return (
        <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2.5 2xl:gap-3">
            <UserListsLink />
            <UserListsEdit />
        </div>
    )
} 