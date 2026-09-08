import { useEffect, useState } from "react";
import useLang from "../../../../hooks/useLang";
import type { ContentItem, Media, Person, PersonItem, UserList } from "../../../../types/tmdb";
import { getList } from "../../../../services/tmdb/tmdb.services";
import { getListById } from "../../../../services/lists-services/listsServices";
import { Link } from "react-router-dom";
import ListPreview from "./components/list-preview/ListPreview";
import ListInfo from "./components/list-info/ListInfo";
import ListCardFooter from "./components/list-card-footer/ListCardFooter";
import ListEmpty from "./components/list-empty/ListEmpty";
import ListEdit from "./components/ListEdit";

export default function ListCard({ list }: { list: UserList }) {

    const lang = useLang()

    const [items, setItems] = useState<(Media | Person)[] | null>(null)

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
                console.error("Falha ao carregar lista:", error)
                setItems([])
            }
        }

        load()
    }, [lang, list.id])

    return (
        <Link to={`/list/${list.id}`} className="w-full flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6 border border-default rounded-4xl sm:rounded-[36px] md:rounded-[40px] lg:rounded-3xl xl:rounded-[28px] 2xl:rounded-4xl p-6 sm:p-7 md:p-8 lg:p-6 xl:p-7 2xl:p-8 relative action-default">
            <ListEdit />
            <ListInfo list={list} />
            {
                items && items.length > 0 ?
                    <ListPreview list={items} />
                    :
                    <ListEmpty />
            }
            <ListCardFooter length={items?.length ?? 0} type={list.type} createdAt={list.created_at} updatedAt={list.updated_at} />
        </Link>
    )
}