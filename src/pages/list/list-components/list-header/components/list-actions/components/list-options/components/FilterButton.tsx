import { PiSlidersHorizontalBold } from "react-icons/pi";

export default function FilterButton() {
    return (
        <button className="size-8 sm:size-9 md:size-10 lg:size-7 xl:size-8 2xl:size-9 flex items-center justify-center rounded-full action-brand">
            <PiSlidersHorizontalBold className="size-1/2 fill-zinc-100 group-hover:fill-white"/>
        </button>
    )
}