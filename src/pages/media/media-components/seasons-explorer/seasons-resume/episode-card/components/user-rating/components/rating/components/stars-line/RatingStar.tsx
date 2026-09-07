import { FaRegStar, FaStar } from "react-icons/fa"

export default function RatingStar({ filled, index, setHover, setRating }: { filled: boolean, index: number, setHover: React.Dispatch<React.SetStateAction<number | null>>, setRating: React.Dispatch<React.SetStateAction<number | null>> }) {

    const Icon = filled ? FaStar : FaRegStar

    return (
        <button className="w-full aspect-square lg:size-5 xl:size-5.5 2xl:size-6 cursor-pointer" onMouseEnter={() => setHover(index)} onClick={() => setRating(index)} key={index}>
            <Icon className={`size-full ${filled ? 'fill-yellow-400' : 'fill-zinc-400 lg:fill-zinc-300'}`} />
        </button>
    )
}