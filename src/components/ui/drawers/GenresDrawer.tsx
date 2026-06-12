import { useContext } from "react"
import { Contexts } from "../../../contexts/ContextsProvider"
import { ProjectsContexts } from "../../../contexts/ProjectsProvider"
import { useTranslate } from "../../../translations/Translations"
import type { IconType } from "react-icons"

type Genre = {
    name: { pt: string, en: string, es: string },
    value: number,
    icon: IconType
}

export default function GenresDrawer({ list }: { list: Genre[] }) {

    const contexts = useContext(Contexts)

    const { lang } = contexts!

    const { line } = useTranslate()

    const toggle = (value: number) => {
        // setProjectFilters(prev => ({ ...prev, genres: prev.genres.includes(value) ? prev.genres.filter(i => i !== value) : [...prev.genres, value] }))
    }

    return (
        <div className="flex flex-col gap-6">
            <p className="text-lg font-medium tracking-wider leading-none text-black dark:text-white">
                {line('genres')}
            </p>
            <div className="flex items-center flex-wrap gap-2.5">
                {
                    list.map((i, index) => {

                        const Icon = i.icon

                        // const selected = projectFilters.genres.includes(i.value)

                        return (
                            <button className={`${false ? '' : 'border-default bg-zinc-50 dark:bg-zinc-950/10 dark:text-zinc-300'} flex items-center gap-1.5 py-2.5 px-3 text-[10px] font-medium tracking-wide leading-none border rounded-full`} onClick={() => toggle(i.value)} key={index}>
                                <Icon className="size-2.5" />
                                {i.name[lang]}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}