import { useEffect, useState } from "react";
import useLang from "../../../../hooks/useLang";
import type { Media, Person, UserList } from "../../../../types/tmdb";
import { getList } from "../../../../services/tmdb/tmdb.services";
import ListPreview from "./components/list-preview/ListPreview";
import ListInfo from "./components/list-info/ListInfo";
import ListCardFooter from "./components/list-card-footer/ListCardFooter";

export default function ListCard({ list }: { list: UserList }) {

    const lang = useLang()

    const [items, setItems] = useState<(Media | Person)[] | null>(null)

    useEffect(() => {
        async function load() {
            try {
                const data = await getList(list.list, lang)
                setItems(data)
            } catch (error) {
                console.error("Falha ao carregar lista:", error)
            }
        }

        load()
    }, [lang, list.list])

    return (
        <div className="w-full flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6 border border-default rounded-4xl sm:rounded-[36px] md:rounded-[40px] lg:rounded-3xl xl:rounded-[28px] 2xl:rounded-4xl p-6 sm:p-7 md:p-8 lg:p-6 xl:p-7 2xl:p-8 action-default">
            <ListInfo list={list} />
            <ListPreview list={items} />
            <ListCardFooter length={list.list.length} type={list.type} updatedAt={list.updatedAt} />
        </div>
    )
}