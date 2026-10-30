import { useContext } from "react"
import { MediaListContexts } from "../../../../../../../contexts/MediaListProvider"
import { useTranslate } from "../../../../../../../translations/Translations"
import { applyListFilters } from "../../../../../../../utils/tmdb/applyFilters"
import { genres } from "../../../../../../../utils/constants"
import type { Media, PersonCredit } from "../../../../../../../types/tmdb"
import formatRate from "../../../../../../../utils/tmdb/formatRate"
import useLang from "../../../../../../../hooks/utils/useLang"
import useDrawer from "../../../../../../../hooks/ui/useDrawer"
import GenresDrawer from "../../../../../overlay/components/drawers/genres-drawer/GenresDrawer"
import FilterSection from "../../ui/filter-section/FilterSection"
import Option from "../../ui/option/Option"

export default function Genres({ open, close }: { open: () => void, close: () => void }) {

    const lang = useLang()

    const { list, listFilters, setListFilters, setFilteredList } = useContext(MediaListContexts)!

    const { openDrawer } = useDrawer()

    const { line } = useTranslate()

    const apply = (genres: number[]) => {
        const nextFilters = {
            ...listFilters,
            genres
        }

        setListFilters(nextFilters)

        const newList = applyListFilters(
            list,
            nextFilters,
            formatRate
        )

        setFilteredList(newList as Media[] | PersonCredit[])
    }

    const toggle = (value: number) => {
        setListFilters(prev => ({ ...prev, genres: prev.genres.includes(value) ? prev.genres.filter(i => i !== value) : [...prev.genres, value] }))
    }

    const handleViewAll = () => {
        close()
        openDrawer(<GenresDrawer list={genres} initialGenres={listFilters.genres} onConfirm={(genres) => apply(genres)} open={open} />)
    }

    return (
        <FilterSection title={line('genres')}>
            {
                genres.slice(0, 3).map((i, index) => {
                    return (
                        <Option selected={listFilters.genres.includes(i.value)} icon={i.icon} label={i.title[lang]} onClick={() => toggle(i.value)} key={index} />
                    )
                })
            }
            <button className="w-fit text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider text-action" onClick={() => handleViewAll()}>
                {line('viewAll')}
            </button>
        </FilterSection>
    )
}