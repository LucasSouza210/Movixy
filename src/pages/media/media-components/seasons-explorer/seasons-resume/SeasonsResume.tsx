import type { Season } from "../../../../../types/tmdb";
import SeasonPicker from "./season-picker/SeasonPicker";

export default function SeasonsResume({ seasons, selected, setSelected }: { seasons: Season[] | undefined, selected: number, setSelected: React.Dispatch<React.SetStateAction<number>> }) {
    return (
        <div className="flex flex-col">
            <SeasonPicker seasons={seasons} selected={selected} setSelected={setSelected} />
        </div>
    )
}