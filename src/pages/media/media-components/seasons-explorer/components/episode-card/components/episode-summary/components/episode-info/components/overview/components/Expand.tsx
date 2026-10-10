import type { SetStateAction } from "react";
import { useTranslate } from "../../../../../../../../../../../../../translations/Translations";

export default function Expand({ expanded, setExpanded }: { expanded: boolean, setExpanded: React.Dispatch<SetStateAction<boolean>> }) {

    const { line } = useTranslate()

    return (
        <button className="text-action-secondary" onClick={() => setExpanded(prev => !prev)}>
            {line(expanded ? "readLess" : "readMore")}
        </button>
    )
}