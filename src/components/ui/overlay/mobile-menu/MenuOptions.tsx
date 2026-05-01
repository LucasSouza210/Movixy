import LangButton from "../../LangButton";
import ModeButton from "../../ModeButton";

export default function MenuOptions() {
    return (
        <div className="flex items-center gap-3 sm:gap-3.5 md:gap-4">
            <ModeButton />
            <LangButton />
        </div>
    )
}