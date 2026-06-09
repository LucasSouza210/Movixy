import { useState } from "react"
import { useTranslate } from "../../../../../../../translations/Translations"
import { mediaTypes } from "../../../../../../../utils/constants"
import FilterSection from "../FilterSection"
import { FaCheck } from "react-icons/fa"

export default function MediaTypeFilter() {

    const { line } = useTranslate()

    const [selected, setSelected] = useState<string>('all')

    return (
        <FilterSection title={line('mediaType')}>
            <div className="flex flex-col gap-3">
                {
                    mediaTypes.map((i, index) => {
                        const Icon = i.icon
                        return (
                            <button className={`${selected == i.value ? 'text-orange-500 dark:text-orange-400' : 'text-zinc-500 dark:text-zinc-400'} flex items-center gap-2`} key={index} onClick={() => setSelected(i.value)}>
                                <span className="size-4 flex items-center justify-center border rounded-sm bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                                    {
                                        selected == i.value &&
                                        <FaCheck className="size-1/2 fill-orange-400 dark:fill-orange-500" />
                                    }
                                </span>
                                <Icon className="size-3" />
                                <span className="text-xs font-medium tracking-wide leading-none truncate">{line(i.title)}</span>
                            </button>
                        )
                    })
                }
            </div>
        </FilterSection>
    )
}