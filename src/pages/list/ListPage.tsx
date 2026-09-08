import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getListData, type ListPageData } from "../../utils/tmdb/getListData";
import useLang from "../../hooks/useLang";
import PageContainer from "../../components/ui/PageContainer";
import ListHeader from "./list-components/list-header/ListHeader";

export default function ListPage() {

    const { id } = useParams()
    const navigate = useNavigate()

    const lang = useLang()

    const [list, setList] = useState<ListPageData | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let ignore = false

        async function load() {

            if (!id) return

            setLoading(true)
            setList(null)

            try {
                const data = await getListData(id, lang)

                if (!ignore) {
                    setList(data)
                }
            } catch (error) {
                console.error("Failed to fetch list data:", error)
                if (!ignore) {
                    navigate("/404", { replace: true })
                }
            } finally {
                if (!ignore) {
                    setLoading(false)
                }
            }
        }

        load()

        return () => {
            ignore = true
        }
    }, [id, lang])

    console.log(list)

    return (
        <PageContainer removeYPadding>
            <div className="w-full flex flex-col items-center">
                <ListHeader list={list} />
            </div>
        </PageContainer>
    )
}