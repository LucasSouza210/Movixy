import RatingInfo from "./components/rating-info/RatingInfo";
import Rating from "./components/rating/Rating";

export default function UserRating() {
    return (
        <div className="w-full flex flex-col justify-center p-6 sm:p-7 md:p-8 lg:p-0 gap-3 sm:gap-3.5 md:gap-4 lg:gap-2.5 xl:gap-3 2xl:gap-3.5 border-t lg:border-none bg-transparent shrink-0 border-default">
            <RatingInfo />
            <Rating />
        </div>
    )
}