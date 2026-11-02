import { useTranslate } from "../../../../../../../../../translations/Translations"

export default function Option({ index, currentIndex, resetInterval, setCurrentIndex }: { index: number, currentIndex: number, resetInterval: () => void, setCurrentIndex: React.Dispatch<React.SetStateAction<number>> }) {

    const { line } = useTranslate()

    const handleClick = () => {
        resetInterval()
        setCurrentIndex(index + 1)
    }

    return (
        <button className={`size-3 sm:size-3.5 md:size-4 lg:size-2.5 xl:size-2.75 2xl:size-3 block rounded-full transition-all duration-300 ease-in-out cursor-pointer ${index == currentIndex - 1 ? 'bg-orange-500' : 'bg-zinc-400 hover:bg-orange-500'}`} aria-label={`${line('ariaGoToSlide')} ${index - 1}`} onClick={() => handleClick()} />
    )
}