import { useState } from "react"
import useDrawer from "../../../../../../hooks/ui/useDrawer";
import type { IconType } from "react-icons"
import GenresDrawerActions from "./components/actions/GenresDrawerActions";
import DrawerTitle from "../ui/DrawerTitle";
import Genres from "./components/genres/Genres";

export type Genre = {
    title: { pt: string, en: string, es: string },
    value: number,
    icon: IconType
}

export default function GenresDrawer({ list, initialGenres, onConfirm, open }: { list: Genre[], initialGenres: number[], onConfirm: (genres: number[]) => void, open: () => void }) {

    const { closeDrawer } = useDrawer()

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
        <div className="lg:max-w-full flex flex-col gap-6 sm:gap-7 md:gap-8 lg:p-8 xl:p-9 2xl:p-10">
            <div className="flex flex-col gap-5 sm:gap-5.5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6">
                <DrawerTitle title="genres" />
                <Genres list={list} selected={selectedGenres} toggle={toggle} />
            </div>
            <GenresDrawerActions any={selectedGenres.length < 1} clean={handleClean} confirm={handleConfirm} open={open} />
        </div>
    )
}