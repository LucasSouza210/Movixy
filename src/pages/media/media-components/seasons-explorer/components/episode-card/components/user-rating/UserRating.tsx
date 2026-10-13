import Info from "./components/info/Info";
import Rating from "./components/rating/Rating";

export default function UserRating() {
    return (
        <div className="w-full flex flex-col justify-center p-6 sm:p-7 md:p-8 lg:p-0 gap-4 sm:gap-4.5 md:gap-5 lg:gap-4 xl:gap-4.5 2xl:gap-5 border-t lg:border-none bg-transparent shrink-0 border-default">
            <Info />
            <Rating />
        </div>
    )
}