import { useState } from "react"
import { useTranslate } from "../../../../translations/Translations"
import useDrawer from "../../../../hooks/useDrawer";
import type { IconType } from "react-icons"
import GenreChip from "./GenreChip"
import GenresDrawerActions from "./GenresDrawerActions";
import { LuShapes } from "react-icons/lu";

type Genre = {
    name: { pt: string, en: string, es: string },
    value: number,
    icon: IconType
}

export default function GenresDrawer({ list, initialGenres, onConfirm }: { list: Genre[], initialGenres: number[], onConfirm: (genres: number[]) => void }) {

    const { closeDrawer } = useDrawer()

    const { line } = useTranslate()

    const [selectedGenres, setSelectedGenres] = useState(initialGenres)


    const toggle = (value: number) => {
        setSelectedGenres(prev => {
            if (value == 0) {
                return []
            }
            const next = prev.includes(value) ? prev.filter(i => i !== value) : [...prev, value]
            return next
        })
    }

    const handleClean = () => {
        setSelectedGenres([])
    }

    const handleConfirm = () => {
        onConfirm(selectedGenres)
        closeDrawer()
    }

    return (
        <div className="flex flex-col gap-6">
            <p className="text-lg font-medium tracking-wider leading-none text-black dark:text-white">
                {line('genres')}
            </p>
            <div className="flex items-center flex-wrap gap-2.5">
                <GenreChip selected={selectedGenres.length < 1} icon={LuShapes} genre={{ pt: 'Qualquer Gênero', en: 'Any Genre', es: 'Cualquier Género' }} value={0} toggle={toggle} />
                {
                    list.map((i, index) => {
                        const selected = selectedGenres.includes(i.value)

                        return (
                            <GenreChip selected={selected} icon={i.icon} genre={i.name} value={i.value} toggle={toggle} key={index} />
                        )
                    })
                }
            </div>
            <GenresDrawerActions any={selectedGenres.length < 1} clean={handleClean} confirm={handleConfirm} />
        </div>
    )
}