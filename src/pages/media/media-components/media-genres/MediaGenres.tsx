import type { Genre } from "../../../home/home-components/home-slider/HomeSlider";
import GenreBadge from "./GenreBadge";

export default function MediaGenres({ genres }: { genres: Genre[] | undefined }) {
    return (
        <div className="flex items-center flex-wrap gap-3">
            {
                genres?.map((i, index) => (
                    <GenreBadge genre={i} key={index} />
                ))
            }
        </div>
    )
}