import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../services/api/supabase";
import { getListData, type ListPageData } from "../../utils/tmdb/getListData";
import type { Media } from "../../types/tmdb";
import useLang from "../../hooks/utils/useLang";
import PageContainer from "../../components/ui/PageContainer";
import MediaListProvider from "../../contexts/MediaListProvider";
import Header from "./list-components/header/Header";
import List from "./list-components/list/List";

export default function ListPage() {

    const { id } = useParams()

    const navigate = useNavigate()

    const lang = useLang()

    const [list, setList] = useState<ListPageData | null>(null)
    const [loading, setLoading] = useState(true)

    const [search, setSearch] = useState('')

    const loadList = useCallback(async (isInitial = false) => {
        if (!id) return

        if (isInitial) {
            setLoading(true)
        }

        try {
            const data = await getListData(id, lang)
            setList(data)
        } catch (error) {
            console.error("Failed to fetch list data:", error)
            if (isInitial) {
                navigate("/404", { replace: true })
            }
        } finally {
            if (isInitial) {
                setLoading(false)
            }
        }
    }, [id, lang, navigate])

    useEffect(() => {
        setSearch('')
    }, [id])


    useEffect(() => {
        loadList(true)
    }, [loadList])

    useEffect(() => {
        if (!id) return

        const channel = supabase
            .channel(`realtime-list-${id}`)
            .on(
                'postgres_changes',
                {
                    event: '*',
                    schema: 'public',
                    table: 'list_items',
                    filter: `list_id=eq.${id}`
                },
                () => {
                    loadList(false)
                }
            )
            .subscribe()

        return () => {
            supabase.removeChannel(channel)
        }
    }, [id, loadList])

    return (
        <MediaListProvider list={list?.resolvedItems as Media[] ?? []}>
            <PageContainer removeYPadding>
                <div className="w-full flex flex-col items-center gap-5 sm:gap-6 md:gap-7 lg:gap-4 xl:gap-5 2xl:gap-6 pb-8 sm:pb-9 md:pb-10 lg:pb-8 xl:pb-9 2xl:pb-10 relative">
                    <Header list={list} loading={loading} search={search} setSearch={setSearch} />
                    <List loading={loading} search={search} />
                </div>
            </PageContainer>
        </MediaListProvider>
    )
}