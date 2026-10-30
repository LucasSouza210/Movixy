import Type from "./components/Type";
import Genres from "./components/Genres";
import Rate from "./components/Rate";

export default function Filters({ open, close }: { open: () => void, close: () => void }) {
    return (
        <div className="min-w-full flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-2 xl:gap-3 2xl:gap-4">
            <Type />
            <Genres open={open} close={close} />
            <Rate />
        </div>
    )
}