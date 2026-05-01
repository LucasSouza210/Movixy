import LangButton from "../../LangButton";
import ModeButton from "../../ModeButton";

export default function MenuActions() {
    return (
        <div className="flex items-center gap-4">
            <ModeButton />
            <LangButton />
        </div>
    )
}