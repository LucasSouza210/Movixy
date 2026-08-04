import { MdOutlineModeEditOutline } from "react-icons/md";

export default function EditProfileButton() {
    return (
        <button className="size-8 flex items-center justify-center border border-default rounded-full absolute top-6 right-6 bg-zinc-50 dark:bg-zinc-900/50">
            <MdOutlineModeEditOutline className="size-1/2 fill-zinc-500 dark:fill-zinc-300"/>
        </button>
    )
}