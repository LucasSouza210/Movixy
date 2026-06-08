import { useContext, useState } from "react"
import { Contexts } from "../../../../../../../contexts/ContextsProvider"
import { useTranslate } from "../../../../../../../translations/Translations"
import { genres } from "../../../../../../../utils/constants"
import FilterSection from "../FilterSection"
import VerticalScroll from "../../../../../../../components/ui/scrolls/VerticalScroll"
import { FaCheck } from "react-icons/fa";

export default function MediaGenresFilter() {

    const contexts = useContext(Contexts)

    const { lang } = contexts!

    const { line } = useTranslate()

    const [list, setList] = useState<number[]>([])

    const toggle = (value: number) => {
        list.includes(value) ? setList(list.filter(i => i != value)) : setList(prev => [...prev, value])
    }

    return (
        <FilterSection title={line('genres')}>
            <VerticalScroll className="w-full h-32" itemsPerView={[3]} gapPerBreakpoint={[1]} >
                {
                    genres.map((i, index) => {

                        const Icon = i.icon

                        return (
                            <button className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400" key={index} onClick={() => toggle(i.value)}>
                                <span className="size-4 flex items-center justify-center border rounded-sm bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                                    {
                                        list.includes(i.value) &&
                                        <FaCheck className="size-1/2 fill-zinc-400 dark:fill-zinc-300" />
                                    }
                                </span>
                                <Icon className="size-3" />
                                <span className="text-xs font-medium tracking-wide leading-none truncate">{i.name[lang]}</span>
                            </button>
                        )
                    })
                }
            </VerticalScroll>
        </FilterSection>
    )
}