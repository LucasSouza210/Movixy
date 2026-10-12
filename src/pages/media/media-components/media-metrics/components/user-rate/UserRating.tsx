import Info from "./components/info/Info";
import Rating from "./components/rating/Rating";

export default function UserRating({ loading }: { loading: boolean }) {
    return (
        <div className="w-full flex flex-col gap-4 sm:gap-4.5 md:gap-5 lg:gap-4 xl:gap-4.5 2xl:gap-5 lg:col-span-3 border rounded-[20px] sm:rounded-[22px] md:rounded-3xl lg:rounded-[14px] xl:rounded-[17px] 2xl:rounded-[20px] p-6 sm:p-7 md:p-8 lg:p-5 xl:p-6 2xl:p-7 bg-default border-default">
            <Info />
            <Rating/>
        </div>
    )
}