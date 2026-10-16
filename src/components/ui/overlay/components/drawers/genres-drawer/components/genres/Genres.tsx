import type { Genre } from "../../GenresDrawer"
import { LuShapes } from "react-icons/lu"
import GenreChip from "./components/GenreChip"

export default function Genres({ list, selected, toggle }: { list: Genre[], selected: number[], toggle: (value: number) => void }) {
    return (
        <div className="flex items-center flex-wrap gap-2.5 sm:gap-2.75 md:gap-3 lg:gap-2.5 xl:gap-2.75 2xl:gap-3">
            <GenreChip selected={selected.length < 1} icon={LuShapes} genre={{ pt: 'Qualquer Gênero', en: 'Any Genre', es: 'Cualquier Género' }} value={0} toggle={toggle} />
            {
                list.map((i, index) => {
                    const selectedGenres = selected.includes(i.value)

                    return (
                        <GenreChip selected={selectedGenres} icon={i.icon} genre={i.title} value={i.value} toggle={toggle} key={index} />
                    )
                })
            }
        </div>
    )
}