import type { ListPageData } from "../../../../utils/tmdb/getListData";
import Info from "./components/info/Info";
import Actions from "./components/actions/Actions";

type Props = {
    list: ListPageData | null
    loading: boolean
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function Header({ list, loading, search, setSearch }: Props) {
    return (
        <div className="w-full flex flex-col gap-4 sm:gap-4.5 md:gap-5 lg:gap-3 xl:gap-3.5 2xl:gap-4 pt-6 sm:pt-7 md:pt-8 lg:pt-5 xl:pt-6 2xl:pt-7 pb-4 sm:pb-4.5 md:pb-5 lg:pb-3 xl:pb-3.5 2xl:pb-4 border-b border-default">
            <Info fixed={list?.fixed} title={list?.title} length={list?.list_items.length} created={list?.created_at} change={list?.updated_at} loading={loading} />
            <Actions search={search} setSearch={setSearch} />
        </div>
    )
}