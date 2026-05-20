import { useContext } from "react"
import { Contexts } from "../../../../../../contexts/ContextsProvider"

export default function SeasonOption({ seasonNumber, selected, setSelected }: { seasonNumber: number, selected: number, setSelected: React.Dispatch<React.SetStateAction<number>> }) {

    const contexts = useContext(Contexts)

    const { lang } = contexts!

    const changeSelected = () => {
        selected !== seasonNumber && setSelected(seasonNumber)
    }

    return (
        <button className={`${selected == seasonNumber ? 'bg-zinc-50 dark:bg-zinc-900 text-black dark:text-white border-orange-500' : 'border-transparent hover:bg-zinc-50/70 dark:hover:bg-zinc-900/70 hover:text-zinc-700 dark:hover:text-zinc-300 text-zinc-400'} w-full h-full flex items-center justify-center border-b-4 rounded-t-2xl font-medium text-sm tracking-wider leading-none transition-all duration-300 cursor-pointer ease-in-out shrink-0`} onClick={() => changeSelected()}>
            {lang == 'en' ? 'S' : 'T'}
            {seasonNumber}
        </button>
    )
}