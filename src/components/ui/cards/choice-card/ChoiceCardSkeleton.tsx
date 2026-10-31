import Skeleton from "../../Skeleton";

export default function ChoiceCardSkeleton() {
    return (
        <Skeleton className="w-full h-fit block rounded-[20px] sm:rounded-[23px] md:rounded-[26px] lg:rounded-[18px] xl:rounded-[20px] 2xl:rounded-[22px] border border-transparent">
            <span className="w-3/10 aspect-2/3 block border border-transparent" />
        </Skeleton>
    )
}