import type { ListPageData } from "../../../../utils/tmdb/getListData";
import ListInfo from "./components/list-info/ListInfo";

export default function ListHeader({ list }: { list: ListPageData | null }) {
    return (
        <div className="w-full py-4 flex items-center justify-between">
            <ListInfo fixed={list?.fixed} title={list?.title} length={list?.list_items.length} created={list?.created_at} change={list?.updated_at} />
        </div>
    )
}
