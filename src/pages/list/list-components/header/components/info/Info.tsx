import InfoSkeleton from "./InfoSkeleton";
import Title from "./components/Title";
import Summary from "./components/Summary";

export default function Info({ fixed, title, length, created, change, loading }: { fixed: boolean | undefined, title: string | undefined, length: number | undefined, created: string | undefined, change: string | undefined, loading: boolean }) {
    return (
        loading ? <InfoSkeleton />
            :
            <div className="flex flex-col gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5">
                <Title fixed={fixed} title={title} />
                <Summary length={length} created={created} change={change} />
            </div>
    )
}