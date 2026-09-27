import { useContext } from "react"
import { ProjectsContexts } from "../../../../../../contexts/ProjectsProvider"
import { useTranslate } from "../../../../../../translations/Translations"
import { mediaTypes } from "../../../../../../utils/constants"
import FilterSection from "../ui/filter-section/FilterSection"
import Option from "../ui/option/Option"

export default function MediaTypeFilter() {

    const projectsContexts = useContext(ProjectsContexts)

    const { projectFilters, setProjectFilters } = projectsContexts!

    const { line } = useTranslate()

    const changeType = (type: string) => {
        setProjectFilters(prev => ({
            ...prev,
            type
        }))
    }

    return (
        <FilterSection title={line('mediaType')}>
            {
                mediaTypes.map((i, index) => {
                    return (
                        <Option selected={projectFilters.type == i.value} label={i.title} icon={i.icon} translate onClick={() => changeType(i.value)} key={index} />
                    )
                })
            }
        </FilterSection>
    )
}