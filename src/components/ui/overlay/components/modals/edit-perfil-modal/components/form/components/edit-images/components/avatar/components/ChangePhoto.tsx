import { LuCamera } from "react-icons/lu";

export default function ChangePhoto({ changePhoto }: { changePhoto: () => void }) {
    return (
        <button type="button" onClick={changePhoto} className="size-7 sm:size-7.5 md:size-8 lg:size-5.5 xl:size-6.25 2xl:size-7 flex items-center justify-center absolute bottom-0 right-0 rounded-full action-brand text-action-alternative">
            <LuCamera className="size-1/2" />
        </button>
    )
}