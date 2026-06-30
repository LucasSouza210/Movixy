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
        <div className="lg:w-136 xl:w-146 2xl:w-156 flex flex-col gap-6 sm:gap-7 md:gap-8 lg:p-8 xl:p-9 2xl:p-10 lg:rounded-4xl 2xl:rounded-[46px] bg-zinc-50 dark:bg-zinc-900">
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-[19px] 2xl:text-xl font-medium tracking-wider leading-none text-black dark:text-white">
                    {line('genres')}
                </p>
                <div className="flex items-center flex-wrap gap-2.5 sm:gap-2.75 md:gap-3 lg:gap-2.5 xl:gap-2.75 2xl:gap-3">
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
            </div>
            <GenresDrawerActions any={selectedGenres.length < 1} clean={handleClean} confirm={handleConfirm} />
        </div>
    )
}