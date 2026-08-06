import { MdOutlineModeEditOutline } from "react-icons/md";

export default function EditProfileButton() {
    return (
        <button className="size-8 sm:size-9 md:size-10 lg:size-7 xl:size-8 2xl:size-9 flex items-center justify-center border border-default rounded-full absolute top-6 sm:top-7 md:top-8 lg:top-5 xl:top-6 2xl:top-7 right-6 sm:right-7 md:right-8 lg:right-5 xl:right-6 2xl:right-7 bg-zinc-50 dark:bg-zinc-900/50">
            <MdOutlineModeEditOutline className="size-1/2 fill-zinc-500 dark:fill-zinc-300"/>
        </button>
    )
}