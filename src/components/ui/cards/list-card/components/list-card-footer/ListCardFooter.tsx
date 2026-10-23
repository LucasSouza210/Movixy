import ListUpdatedAt from "./components/ListUpdatedAt";
import ListLength from "./components/ListLength";
import Exclude from "./components/Exclude";

export default function ListCardFooter({ title, length, createdAt, updatedAt, fixed, id }: { title: string, length: number | undefined | null, createdAt: string, updatedAt: string, fixed: boolean, id: string }) {
    return (
        <div className="w-full flex items-center justify-between pt-4 sm:pt-5 md:pt-6 lg:pt-4 xl:pt-5 2xl:pt-6 border-t border-default">
            <ListUpdatedAt createdAt={createdAt} updatedAt={updatedAt} />
            <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2.5 2xl:gap-3">
                <ListLength length={length} />
                {
                    !fixed &&
                    <Exclude listId={id} title={title} fixed={fixed} />
                }
            </div>
        </div>
    )
}