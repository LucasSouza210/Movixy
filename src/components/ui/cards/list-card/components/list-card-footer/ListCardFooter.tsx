import ListLength from "./components/ListLength";
import ListUpdatedAt from "./components/ListUpdatedAt";

export default function ListCardFooter({ length, type, updatedAt }: { length: number | undefined | null, type: 'media' | 'person' | null | undefined, updatedAt: Date | null | undefined }) {
    return (
        <div className="w-full flex items-center justify-between pt-4 border-t border-default">
            <ListLength length={length} type={type} />
            <ListUpdatedAt updatedAt={updatedAt}/>
        </div>
    )
}