import { useContext } from "react"
import { MediaListContexts } from "../../../../../../contexts/MediaListProvider"
import { useTranslate } from "../../../../../../translations/Translations"
import { mediaTypes } from "../../../../../../utils/constants"
import FilterSection from "../ui/filter-section/FilterSection"
import Option from "../ui/option/Option"

export default function MediaTypeFilter() {

    const listContexts = useContext(MediaListContexts)

    const { listFilters, setListFilters } = listContexts!

    const { line } = useTranslate()

    const changeType = (type: string) => {
        setListFilters(prev => ({
            ...prev,
            type
        }))
    }

    return (
        <FilterSection title={line('mediaType')}>
            {
                mediaTypes.map((i, index) => {
                    return (
                        <Option selected={listFilters.type == i.value} label={i.title} icon={i.icon} translate onClick={() => changeType(i.value)} key={index} />
                    )
                })
            }
        </FilterSection>
    )
}