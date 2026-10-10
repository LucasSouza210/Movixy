import RatingTitle from "./components/RatingTitle";
import RatingDesc from "./components/RatingDesc";

export default function RatingInfo() {
    return (
        <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-2.5 xl:gap-3 2xl:gap-3.5">
            <RatingTitle />
            <RatingDesc />
        </div>
    )
}