import { SlOptions } from "react-icons/sl";
import useClickOutside from "../../../../../../../../hooks/useClickOutside";
import Dropdown from "./components/Dropdown";

export default function PerfilOptions() {

    const { ref, open, toggle } = useClickOutside()

    return (
        <div className="flex flex-col items-center absolute top-6 sm:top-7 md:top-8 lg:top-5 xl:top-6 2xl:top-7 right-0" ref={ref}>
            <button className="size-8 sm:size-9 md:size-10 lg:size-7 xl:size-8 2xl:size-9 flex items-center justify-center border border-default rounded-full right-0 group action-default border-action" onClick={toggle}>
                <SlOptions className="size-1/2 transition-all duration-200 ease-in-out fill-zinc-400 group-hover:fill-zinc-500/90 dark:fill-zinc-300 dark:group-hover:fill-white" />
            </button>
            <Dropdown open={open}/>
        </div>
    )
}