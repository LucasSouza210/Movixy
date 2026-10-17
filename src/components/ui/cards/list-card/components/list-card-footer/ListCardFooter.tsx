import ListLength from "./components/ListLength";
import ListUpdatedAt from "./components/ListUpdatedAt";

export default function ListCardFooter({ length, createdAt, updatedAt }: { length: number | undefined | null, createdAt: string, updatedAt: string }) {
    return (
        <div className="w-full flex items-center justify-between pt-4 sm:pt-5 md:pt-6 lg:pt-4 xl:pt-5 2xl:pt-6 border-t border-default">
            <ListUpdatedAt createdAt={createdAt} updatedAt={updatedAt} />
            <ListLength length={length} />
        </div>
    )
}