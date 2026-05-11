import type { Director } from "../../types/tmdb";
import DirectorCard from "./cards/director-card/DirectorCard";

export default function DirectorRow({ list }: { list: Director[] }) {
    return (
        <div className="w-full flex">
            {
                list.map((i, index) => (
                    <DirectorCard director={i} key={index} />
                ))
            }
        </div>
    )
}