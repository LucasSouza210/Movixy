import ListUpdatedAt from "./components/ListUpdatedAt";
import ListLength from "./components/ListLength";
import Exclude from "./components/Exclude";

export default function ListCardFooter({ title, length, createdAt, updatedAt, fixed, id }: { title: string, length: number | undefined | null, createdAt: string, updatedAt: string, fixed: boolean, id: string }) {
    return (
        <div className="w-full flex items-center justify-between pt-3 sm:pt-3.5 md:pt-4 lg:pt-3 xl:pt-3.5 2xl:pt-4 border-t border-default">
            <ListUpdatedAt createdAt={createdAt} updatedAt={updatedAt} />
            <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2.25 2xl:gap-2.5">
                <ListLength length={length} />
                {
                    !fixed &&
                    <Exclude listId={id} title={title} fixed={fixed} />
                }
            </div>
        </div>
    )
}