import type { UserList } from "../../../../../../types/tmdb";
import ListDescription from "./components/ListDescription";
import ListTitle from "./components/ListTitle";

export default function ListInfo({ list }: { list: UserList }) {
    return (
        <div className="flex flex-col gap-0.5 sm:gap-0.75 md:gap-1 lg:gap-0.5 xl:gap-0.75 2xl:gap-1">
            <ListTitle title={list?.title} translate={list?.translate} />
            <ListDescription description={list.description} translate={list?.translate} />
        </div>
    )
}