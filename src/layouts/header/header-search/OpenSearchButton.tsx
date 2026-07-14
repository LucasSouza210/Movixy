import { IoSearch } from "react-icons/io5";


export default function OpenSearchButton({ isOpen, open }: { isOpen: boolean, open: () => void }) {
    return (
        <button className="cursor-pointer group" onClick={() => open()}>
            <IoSearch className={`lg:size-4 xl:size-4.75 2xl:size-5.5 transition-all ease-in-out duration-200 fill-zinc-500 group-hover:fill-zinc-700 dark:fill-zinc-400 dark:group-hover:fill-white ${isOpen ? 'size-4.5 sm:size-4.75 md:size-5' : 'size-5 sm:size-5.5 md:size-6'}`} />
        </button>
    )
}