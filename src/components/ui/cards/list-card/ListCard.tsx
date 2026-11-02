import { useEffect, useState } from "react";
import type { ContentItem, Media, Person, PersonItem, UserList } from "../../../../types/tmdb";
import { getList } from "../../../../services/tmdb/lists";
import { getListById } from "../../../../services/lists-services/listsServices";
import { Link } from "react-router-dom";
import useLang from "../../../../hooks/utils/useLang";
import PreviewSkeleton from "./components/preview/PreviewSkeleton";
import Preview from "./components/preview/Preview";
import Info from "./components/info/Info";
import Empty from "./components/empty/Empty";
import Footer from "./components/footer/Footer";

export default function ListCard({ list }: { list: UserList }) {

    const lang = useLang()

    const [items, setItems] = useState<(Media | Person)[] | null>(null)

    const loading = items == null

    useEffect(() => {
        async function load() {
            try {
                const listWithItems = await getListById(list.id)

                const mapped: (ContentItem | PersonItem)[] = (listWithItems.list_items ?? []).map((item) => {
                    if (item.item_type === "person") {
                        return { id: String(item.item_id), title: "" } as PersonItem
                    }
                    return { id: String(item.item_id), mediaType: item.item_type, title: "" } as ContentItem
                })

                const data = await getList(mapped, lang)
                setItems(data)
            } catch (error) {
                console.error("Failed to load list:", error)
                setItems([])
            }
        }

        load()
    }, [lang, list.id])

    return (
        <Link to={`/list/${list.id}`} className="w-full flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-3.5 2xl:gap-4 border border-default rounded-3xl sm:rounded-[30px] md:rounded-[36px] lg:rounded-3xl xl:rounded-[30px] 2xl:rounded-[36px] p-6 sm:p-7 md:p-8 lg:p-6 xl:p-7 2xl:p-8 action-default">
            <Info list={list} />
            {
                loading ? <PreviewSkeleton />
                    :
                    items && items.length > 0 ?
                        <Preview list={items} />
                        :
                        <Empty />
            }
            <Footer title={list.title} length={items?.length ?? 0} createdAt={list.created_at} updatedAt={list.updated_at} fixed={list.fixed} id={list.id} />
        </Link>
    )
}