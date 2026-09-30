import { useEffect, useState } from "react"
import { getTrendingPeople } from "../../../../services/tmdb/person"
import type { Person } from "../../../../types/tmdb"
import useLang from "../../../../hooks/useLang"
import PersonPortrait from "./components/person-poster/PersonPortrait"
import HighlightInfo from "./components/highlight-info/HighlightInfo"

export default function WeeklyHighlight() {

    const lang = useLang()

    const [person, setPerson] = useState<Person | null>(null)

    useEffect(() => {
        async function load() {
            try {
                setPerson(null)

                const list = await getTrendingPeople(lang)

                await new Promise(resolve => setTimeout(resolve, 500))

                setPerson(list[0] ?? null)
            } catch (error) {
                console.error("Failed to load highlight of the week:", error)
                setPerson(null)
            }
        }

        load()
    }, [lang])

    return (
        <div className="w-full aspect-2/3 h-fit lg:aspect-video flex  rounded-[40px] sm:rounded-[46px] md:rounded-[52px] lg:rounded-4xl xl:rounded-[36px] 2xl:rounded-[40px] border border-default p-8 sm:p-10 md:p-12 lg:p-8 xl:p-9 2xl:p-10 relative bg-white dark:bg-black/15">
            {/* <div className="w-full flex gap-4">
                <PersonPortrait path={person?.profile_path} name={person?.name} />
                <HighlightInfo person={person} />
            </div> */}
        </div>
    )
}