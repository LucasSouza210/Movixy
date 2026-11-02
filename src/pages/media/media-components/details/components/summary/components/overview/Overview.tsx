import OverviewSkeleton from "./OverviewSkeleton"
import Title from "./components/Title"
import OverviewText from "./components/OverviewText"

export default function Overview({ overview, loading }: { overview: string | undefined, loading: boolean }) {
    return (
        loading ? <OverviewSkeleton />
            :
            <div className="w-full flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2 2xl:gap-2.5">
                <Title />
                <OverviewText overview={overview} />
            </div>
    )
}