import type { UserList } from "../../../../../../types/tmdb";
import ListTitle from "./components/ListTitle";
import ListDescription from "./components/ListDescription";

export default function ListInfo({ list }: { list: UserList }) {
    return (
        <div className="w-full flex flex-col gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5">
            <ListTitle title={list?.title} fixed={list.fixed} />
            <ListDescription description={list.description} fixed={list.fixed} />
        </div>
    )
}