import ListTitle from "./components/ListTitle";
import ListSummary from "./components/ListSummary";

export default function ListInfo({ fixed, title, length, created, change }: { fixed: boolean | undefined, title: string | undefined, length: number | undefined, created: string | undefined, change: string | undefined }) {
    return (
        <div className="flex flex-col gap-1">
            <ListTitle fixed={fixed} title={title} />
            <ListSummary length={length} created={created} change={change} />
        </div>
    )
}