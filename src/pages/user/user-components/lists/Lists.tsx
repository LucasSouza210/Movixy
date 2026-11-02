import { useContext } from "react";
import { Contexts } from "../../../../contexts/ContextsProvider";
import ContentRow from "../../../../components/ui/content-row/ContentRow";
import Header from "./components/header/Header";

const itemsPerView = [1, 1, 1, 2]

export default function Lists() {

    const { userLists } = useContext(Contexts)!

    return (
        <ContentRow className="w-full flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-4 xl:gap-5 2xl:gap-6" content={userLists} option="list" itemsPerView={itemsPerView}>
            <Header />
        </ContentRow>
    )
}