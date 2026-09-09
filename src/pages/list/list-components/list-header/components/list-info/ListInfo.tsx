import ListTitle from "./components/ListTitle";
import ListSummary from "./components/ListSummary";

export default function ListInfo({ fixed, title, length, created, change }: { fixed: boolean | undefined, title: string | undefined, length: number | undefined, created: string | undefined, change: string | undefined }) {
    return (
        <div className="flex flex-col gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5">
            <ListTitle fixed={fixed} title={title} />
            <ListSummary length={length} created={created} change={change} />
        </div>
    )
}