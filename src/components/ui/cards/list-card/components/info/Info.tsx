import type { UserList } from "../../../../../../types/tmdb";
import Title from "./components/Title";
import Description from "./components/Description";
import Edit from "./components/Edit";

export default function Info({ list }: { list: UserList }) {
    return (
        <div className="w-full flex items-start gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6">
            <div className="w-full flex flex-col gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-0.5 xl:gap-0.75 2xl:gap-1">
                <Title title={list?.title} fixed={list.fixed} />
                <Description description={list.description} fixed={list.fixed} />
            </div>
            {
                !list.fixed &&
                <Edit list={list} />
            }
        </div>
    )
}