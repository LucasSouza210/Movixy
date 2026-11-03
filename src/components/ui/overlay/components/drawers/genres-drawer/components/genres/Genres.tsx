import type { Genre } from "../../GenresDrawer"
import { LuShapes } from "react-icons/lu"
import GenreChip from "./components/GenreChip"
import LimitedWrapScroll from "../../../../../../scrolls/LimitedWrapScroll"


const rowsPerView = [7, 8, 9, 6]
const gapPerBreakpoint = [2.5, 2.75, 3, 2.5, 2.75, 3]

export default function Genres({ list, selected, toggle }: { list: Genre[], selected: number[], toggle: (value: number) => void }) {
    return (
        <LimitedWrapScroll rowsPerView={rowsPerView} gapPerBreakpoint={gapPerBreakpoint} contentClassName="items-center">
            <GenreChip selected={selected.length < 1} icon={LuShapes} genre={{ pt: 'Qualquer Gênero', en: 'Any Genre', es: 'Cualquier Género' }} value={0} toggle={toggle} />
            {
                list.map((i, index) => {
                    const selectedGenres = selected.includes(i.value)

                    return (
                        <GenreChip selected={selectedGenres} icon={i.icon} genre={i.title} value={i.value} toggle={toggle} key={index} />
                    )
                })
            }
        </LimitedWrapScroll>
    )
}