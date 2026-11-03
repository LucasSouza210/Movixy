import LangButton from "../../../../../buttons/lang-button/LangButton";
import ModeButton from "../../../../../buttons/ModeButton";

export default function Options() {
    return (
        <div className="flex items-center gap-3 sm:gap-3.5 md:gap-4">
            <ModeButton />
            <LangButton />
        </div>
    )
}