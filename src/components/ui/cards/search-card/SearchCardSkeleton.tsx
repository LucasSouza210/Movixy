import Skeleton from "../../Skeleton";

export default function SearchCardSkeleton() {
    return (
        <Skeleton className="w-full flex p-3 sm:p-3.5 md:p-4 lg:p-3 xl:p-3.5 2xl:p-4 rounded-[20px] sm:rounded-[23px] md:rounded-[26px] lg:rounded-[20px] xl:rounded-[23px] 2xl:rounded-[26px]">
            <span className="w-3/10 aspect-2/3"/>
        </Skeleton >
    )
}