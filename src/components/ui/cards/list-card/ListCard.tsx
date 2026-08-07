import { useEffect, useState } from "react";
import useLang from "../../../../hooks/useLang";
import type { Media, Person, UserList } from "../../../../types/tmdb";
import { getList } from "../../../../services/tmdb/tmdb.services";
import ListPreview from "./components/list-preview/ListPreview";
import ListInfo from "./components/list-info/ListInfo";
import ListLength from "./components/list-length/ListLength";

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

    console.log(items)

    return (
        <div className="w-full flex flex-col gap-4 border border-default rounded-3xl p-6 bg-white hover:bg-zinc-50/80 dark:bg-black/20 dark:hover:bg-zinc-900/30">
            <ListInfo list={list} />
            <ListPreview list={items} />
            <ListLength length={list.list.length} type={list.type}/>
        </div>
    )
}